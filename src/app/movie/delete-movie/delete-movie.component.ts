import { Component } from '@angular/core';
import { MovieService } from "./../services/movie.service";
import { Movie } from "../models/movie.model";
@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent {
  constructor(private movieService: MovieService) {}
  ResultMovies: Movie[] = [];
  selectedMovieId: number| null = null;
  selectedMovie: string;
  ngOnInit() {
    this.movieService.getMoviesFromHttp().subscribe(movies => {
      this.ResultMovies = movies;
    });
  }

  deleteMovie() {
    if (this.selectedMovieId !== null) {
      this.movieService.deleteMovie(this.selectedMovieId).subscribe(() => {
        this.selectedMovie = this.ResultMovies.filter(movie => movie.id == this.selectedMovieId).at(0).name;
        console.log('Deleted movie with name:', this.selectedMovie);
        alert(`Deleted movie with the name: "${this.selectedMovie}"`);
        this.ResultMovies = this.ResultMovies.filter(movie => movie.id !== this.selectedMovieId);
        this.selectedMovieId = null;
      }, error => {
        console.error('Error deleting movie:', error);
      });
    } else {
      console.log('No movie selected for deletion');
    }
  }

}
