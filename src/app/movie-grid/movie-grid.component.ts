import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './services/movie-api.service';
import { Observable, of, Subject } from 'rxjs';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options as SliderOptions, ChangeContext as SliderChangeContext, CustomStepDefinition } from 'ng5-slider';
import { Movie } from './interfaces/movie';
import { MovieFilter } from './interfaces/movie-filter';
import { Certification } from './interfaces/certification';

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

  public movieCertificationValue: number= 2;


  public movieCertificationsSliderOptions: SliderOptions;

  public includeAdult: boolean = false;

  public onIncludeAdultClick(adult: boolean): void {
    this.includeAdult = adult;
    this.getMostPopularMovies();
  }

  public sortBy: string = "popularity.desc";

  public onSortByChange(sortBy: string): void {
    this.sortBy = sortBy;
    this.getMostPopularMovies();
  }

  public certifications: Array<Certification> = new Array<Certification>();

  public movies: Movie[] = new Array<Movie>();

  constructor(private movieApiService: MovieApiService, config: NgbPaginationConfig) {
    config.size = 'lg';
    config.rotate = true
    config.ellipses = false;
    config.boundaryLinks = true;

    this.certifications = this.movieApiService.getCertifications();
    this.movieCertificationsSliderOptions = {
      showTicksValues: false,
      showTicks: true,
      stepsArray: this.certifications.map(x => <CustomStepDefinition>{ value: x.order, legend: x.certification })

    };
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

  public onMovieCertificationSliderUserChangeEnd(changeContext: SliderChangeContext): void {
    this._currentPage = 1;
    this.getMostPopularMovies();
  }

  private getMovieFilter(): MovieFilter {
    let movieFilter: MovieFilter = <MovieFilter>{
      page: this.currentPage
      , certificationCountry: "US"
      , certification: this.movieApiService.getCertifications().find(x => x.order == this.movieCertificationValue).certification// "R"
      , sortBy: this.sortBy
      , includeAdult: this.includeAdult
      , movieRatingMinValue: this.movieRatingMinValue
      , movieRatingMaxValue: this.movieRatingMaxValue
    };
    return movieFilter;
  }

  
}
