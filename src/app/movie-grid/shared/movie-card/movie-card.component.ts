import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

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
