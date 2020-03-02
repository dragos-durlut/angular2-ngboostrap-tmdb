import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieGridRoutingModule } from './movie-grid-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieGridComponent } from './movie-grid.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { MovieApiService } from './services/movie-api.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MovieGridComponent, MovieCardComponent, TruncatePipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MovieGridRoutingModule,
    NgbModule,
    Ng5SliderModule
  ]
  ,
  exports: [NgbModule]
  ,
  providers: [MovieApiService]
})
export class MovieGridModule { }
