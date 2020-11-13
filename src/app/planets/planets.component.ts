import { Component, OnInit, ViewChild } from '@angular/core';
import { formatNumber, formatPercent } from '@angular/common';
import { SwapiService } from '../swapi.service';
import { Planet } from '../models/planet.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  planets = new MatTableDataSource([]);
  displayedColumns = ['name', 'climate', 'diameter', 'gravity', 'orbital_period', 'population', 'rotation_period', 'surface_water', 'terrain'];
  numberedColumns = ['diameter', 'orbital_period', 'population', 'rotation_period'];
  percentColumns = ['surface_water'];

  constructor(public swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getPlanets().subscribe(
      (planets) => {
        this.planets.data = planets.map((e) => this.planetMapper(e));
        this.planets.sort = this.sort;
      });
  }

  planetMapper(entity: Planet) {
    return {
      ...entity,

      ...this.numberedColumns.reduce((c, k) => {
        return {...c, [`_${k}`]: formatNumber(entity[k], 'en')};
      }, {}),

      ...this.percentColumns.reduce((c, k) => {
        return {...c, [`_${k}`]: formatPercent(entity[k], 'en')};
      }, {})
    };
  }
}
