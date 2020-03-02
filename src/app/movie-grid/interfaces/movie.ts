export interface Movie {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: Date;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string | null;
  adult: boolean;
  overview: string;
  poster_path: string;
}
