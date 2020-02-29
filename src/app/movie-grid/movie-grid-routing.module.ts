import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieGridComponent } from './movie-grid.component';


const routes: Routes = [
  {
    path: 'movie-grid'
    , component: MovieGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieGridRoutingModule { }
