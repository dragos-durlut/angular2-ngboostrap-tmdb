import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MoviePage } from '../interfaces/movie-page';
import { MovieFilter } from '../interfaces/movie-filter';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private apiKey: string = "7034fa57ce124b066dcec90cf987d846";
  //private apyKeyQueryParam = `api_key=${this.apiKey}`;
  //https://www.themoviedb.org/documentation/api/discover
  private apiBaseUrl: string = "http://api.themoviedb.org/3/";
  private discoverMoviesUrl: string = `${this.apiBaseUrl}discover/movie/`;

  constructor(private httpClient: HttpClient) {
  }

  public getTheMostPopularMovies(filter: MovieFilter): Observable<MoviePage> {
    return this.httpClient.get<MoviePage>(this.discoverMoviesUrl,
      {
        params:
          <HttpParams><unknown>
          {
            api_key: this.apiKey
            , page: filter.page
            , certification_country: filter.certificationCountry
            , certification: filter.certification
            , sort_by: filter.sortBy
            , include_adult: filter.includeAdult
            , "vote_average.gte": filter.movieRatingMinValue
            , "vote_average.lte": filter.movieRatingMaxValue
          }
      });
  }
}
