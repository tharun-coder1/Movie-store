import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Movie, movies } from "../models/movie.model";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private ROOT_URL = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ROOT_URL}/${id}`);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
