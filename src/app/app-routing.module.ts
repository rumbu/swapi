import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
    { path: '', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
