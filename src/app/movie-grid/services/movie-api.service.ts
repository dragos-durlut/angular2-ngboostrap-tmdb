import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MoviePage } from '../interfaces/movie-page';
import { MovieFilter } from '../interfaces/movie-filter';
import { Certification } from '../interfaces/certification';
import { Genre } from '../interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private v3apiKey: string = "7034fa57ce124b066dcec90cf987d846";
  private v4apiAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDM0ZmE1N2NlMTI0YjA2NmRjZWM5MGNmOTg3ZDg0NiIsInN1YiI6IjVkMGE2NmI1YzNhMzY4NzE4NjIxOGM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEUx4NxhoPFckp2oc-z_xAmSec2jrm8VRrM8uV4_fi8";
  //private apyKeyQueryParam = `api_key=${this.apiKey}`;
  //https://www.themoviedb.org/documentation/api/discover
  private apiBaseUrl: string = "https://api.themoviedb.org/3/";
  private discoverMoviesUrl: string = `${this.apiBaseUrl}discover/movie/`;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private httpClient: HttpClient) {
  }

  private getHttpParamsFilter(filter: MovieFilter): HttpParams {
    return <HttpParams><unknown>
      {
        api_key: this.v3apiKey
        , page: filter.page
        , certification_country: filter.certificationCountry
        , certification: filter.certification
        , sort_by: filter.sortBy
        , include_adult: filter.includeAdult
        , "vote_average.gte": filter.movieRatingMinValue
        , "vote_average.lte": filter.movieRatingMaxValue
      };
  }

  public getTheMostPopularMovies(filter: MovieFilter): Observable<MoviePage> {
    
    let httpParams = this.getHttpParamsFilter(filter);    
    return this.httpClient.get<MoviePage>(this.discoverMoviesUrl, { headers: this.headers, params: httpParams });    
  }

  public getCertifications(): Array<Certification> {
    let certificationsArray: Array<Certification> = <Array<Certification>>[
      {
        "certification": "NR",
        "meaning": "No rating information.",
        "order": 0
      },
      {
        "certification": "G",
        "meaning": "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
        "order": 1
      },
      {
        "certification": "PG",
        "meaning": "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
        "order": 2
      },
      {
        "certification": "PG-13",
        "meaning": "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
        "order": 3
      },
      {
        "certification": "R",
        "meaning": "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
        "order": 4
      },
      {
        "certification": "NC-17",
        "meaning": "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
        "order": 5
      }];
    return certificationsArray;
  }

  public getGenres(): Array<Genre> {
    let genresArray: Array<Genre> = <Array<Genre>>
      [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }];
    return genresArray;
  }
}
