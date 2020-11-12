import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {'class': 'mat-elevation-z6'},
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
