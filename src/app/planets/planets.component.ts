import { Component, OnInit, ViewChild } from '@angular/core';
import { formatNumber, formatPercent } from '@angular/common';
import { SwapiService } from '../swapi.service';
import { Planet } from '../models/planet.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const UNKNOWN_VALUE = -Infinity;

function formatIfNonEmpty(entity, k, formatter: (value: string) => string) {
    return 'unknown' === entity[k] ? (entity[k] = UNKNOWN_VALUE, '—') : formatter(entity[k]);
}

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
      ...this.numberedColumns.reduce((c, k) => {
        return {...c, [`_${k}`]: formatIfNonEmpty(entity, k, (v) => formatNumber(parseFloat(v), 'en'))};
      }, {}),

      ...this.percentColumns.reduce((c, k) => {
        return {...c, [`_${k}`]: formatIfNonEmpty(entity, k, (v) => formatPercent(parseFloat(v) * .01, 'en'))};
      }, {}),

      ...entity,
    };
  }
}
