import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: '[app-movie-card]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  private imageBaseUrl: string = "https://image.tmdb.org/t/p/w500";

  public posterImageUrl: string;

  

  constructor() {
    
  }

  ngOnInit(): void {
    this.posterImageUrl = `${this.imageBaseUrl}${this.movie.poster_path}`;
  }
}
