import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
