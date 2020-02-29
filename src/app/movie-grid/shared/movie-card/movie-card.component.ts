import { Component, OnInit, Input } from '@angular/core';

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
    this.randomNumber = this.randomIntFromInterval(100, 1000);
  }

  ngOnInit(): void {
    this.posterImageUrl = `${this.imageBaseUrl}${this.movie.poster_path}`;
  }


  public randomNumber: number;
  private randomIntFromInterval(min, max): number { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
}
