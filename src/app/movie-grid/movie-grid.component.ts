import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './services/movie-api.service';
import { Observable, of, Subject } from 'rxjs';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

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
    this.getMostPopularMovies(page);
  }

  public totalNumberOfResults: number;
  private totalNumberOfPages: number;


  public nrOfPagesToDisplay = 10;
  public pageSize = 20;

  public movies: Movie[] = new Array<Movie>();

  constructor(private movieApiService: MovieApiService, config: NgbPaginationConfig) {
    config.size = 'lg';
    config.rotate = true
    config.ellipses = false;
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.getMostPopularMovies(1);
  }

  private getMostPopularMovies(page: number): void {
    this.movieApiService.getTheMostPopularMovies(page).subscribe(moviesPage => {
      this.movies = moviesPage.results;
      this._currentPage = moviesPage.page;
      this.totalNumberOfPages = moviesPage.total_pages;
      this.totalNumberOfResults = moviesPage.total_results;
    });
  }

}
