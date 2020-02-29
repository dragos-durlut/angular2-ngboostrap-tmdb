import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieGridRoutingModule } from './movie-grid-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieGridComponent } from './movie-grid.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';



@NgModule({
  declarations: [MovieGridComponent, MovieCardComponent],
  imports: [
    CommonModule,
    MovieGridRoutingModule,
    NgbModule
  ]
  ,
  exports: [NgbModule]
})
export class MovieGridModule { }
