import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MoviePage } from '../interfaces/movie-page';
import { MovieFilter } from '../interfaces/movie-filter';
import { Certification } from '../interfaces/certification';

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

  public getCertifications(): Array<Certification> {
    let certificationsArray: Array<Certification> = <Array<Certification>>[
      {
        "certification": "G",
        "meaning": "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
        "order": 1
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
      },
      {
        "certification": "NR",
        "meaning": "No rating information.",
        "order": 0
      },
      {
        "certification": "PG",
        "meaning": "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
        "order": 2
      }];
    return certificationsArray;
  }
}
