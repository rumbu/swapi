import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SwapiService } from '../swapi.service';
import { of } from 'rxjs';

import { PlanetsComponent } from './planets.component';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;
  const swapiServiceMock = {
    getPlanets: () => of([])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsComponent ],
      imports: [MatButtonModule, MatIconModule, MatTableModule],
      providers: [{
        provide: SwapiService,
        useValue: swapiServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
