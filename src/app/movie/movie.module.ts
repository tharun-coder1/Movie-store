import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MovieRoutingModule } from "./movie-routing.module";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieComponent } from "./movie/movie.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieComponent,
    AddMovieComponent,
    DeleteMovieComponent,
  ],
  imports: [CommonModule, MovieRoutingModule, ReactiveFormsModule],
})
export class MovieModule {}
