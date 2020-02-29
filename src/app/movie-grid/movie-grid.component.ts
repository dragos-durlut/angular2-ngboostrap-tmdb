import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './services/movie-api.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {

  public movies: Movie[] = new Array<Movie>();
  public moviesPage: MoviePage;


  constructor(private movieApiService: MovieApiService) {
  }

  ngOnInit() {
    this.movieApiService.getTheMostPopularMovies().subscribe(moviesPage => { this.moviesPage = moviesPage; this.movies = moviesPage.results });
  }

}
