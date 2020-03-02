import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './services/movie-api.service';
import { Observable, of, Subject } from 'rxjs';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options as SliderOptions, ChangeContext as SliderChangeContext } from 'ng5-slider';
import { Movie } from './interfaces/movie';
import { MovieFilter } from './interfaces/movie-filter';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  providers: [NgbPaginationConfig] 
})
export class MovieGridComponent implements OnInit {

  private _currentPage = 1;
  
  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(page: number) {
    this._currentPage = page;
    this.getMostPopularMovies();
  }

  public totalNumberOfResults: number;
  private totalNumberOfPages: number;


  public nrOfPagesToDisplay = 10;
  public pageSize = 20;


  public movieRatingMinValue: number = 5;
  public movieRatingMaxValue: number = 10;

  public movieRatingSliderOptions: SliderOptions = {
    floor: 0,
    ceil: 10
  };

  public movies: Movie[] = new Array<Movie>();

  constructor(private movieApiService: MovieApiService, config: NgbPaginationConfig) {
    config.size = 'lg';
    config.rotate = true
    config.ellipses = false;
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.getMostPopularMovies();
  }

  private getMostPopularMovies(): void {
    this.movieApiService.getTheMostPopularMovies(this.getMovieFilter()).subscribe(moviesPage => {
      this.movies = moviesPage.results;
      this._currentPage = moviesPage.page;
      this.totalNumberOfPages = moviesPage.total_pages;
      this.totalNumberOfResults = moviesPage.total_results;
    });
  }


  public onMovieRatingSliderUserChangeEnd(changeContext: SliderChangeContext): void {
    this._currentPage = 1;
    this.getMostPopularMovies();
  }

  private getMovieFilter(): MovieFilter {
    let movieFilter: MovieFilter = <MovieFilter>{
      page: this.currentPage
      , certificationCountry: "US"
      , certification: "R"
      , sortBy: "vote_average.desc"
      , includeAdult: false
      , movieRatingMinValue: this.movieRatingMinValue
      , movieRatingMaxValue: this.movieRatingMaxValue
    };
    return movieFilter;
  }

  
}
