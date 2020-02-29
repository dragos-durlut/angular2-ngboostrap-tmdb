import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieGridRoutingModule } from './movie-grid-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieGridComponent } from './movie-grid.component';


@NgModule({
  declarations: [MovieGridComponent],
  imports: [
    CommonModule,
    MovieGridRoutingModule,
    NgbModule
  ]
  ,
  exports: [NgbModule]
})
export class MovieGridModule { }
