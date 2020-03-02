import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviePage } from '../interfaces/movie-page';

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

  public getTheMostPopularMovies(page: number = 1): Observable<MoviePage> {
    return this.httpClient.get<MoviePage>(this.discoverMoviesUrl,
      {
        params:
        {
          api_key: this.apiKey
          , page: page.toString()
          , certification_country: "US"
          , certification: "R"
          , sort_by: "vote_average.desc"
          , include_adult: "false"
        }
      });
  }
}
