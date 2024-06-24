import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movie.model";
import { MovieService } from "./../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  movieslist: Movie[] = [];
  filteredMovies: Movie[] = [];
  name: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMoviesFromHttp().subscribe(movies => {
      this.movieslist = movies;
      this.filteredMovies = movies;
    });
  }

  searchMovies(name: string) {
    this.name = name;
    if (this.name) {
      this.filteredMovies = this.movieslist.filter(movie => movie.name.toLowerCase().includes(this.name.toLowerCase()));
    } else {
      this.filteredMovies = this.movieslist;
    }
    console.log(this.filteredMovies);
  }
}
