import { AddMovieComponent } from "./add-movie/add-movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { DeleteMovieComponent } from "./delete-movie/delete-movie.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
  },
  {
    path: "add",
    component: AddMovieComponent,
  },
  {
    path: "delete",
    component: DeleteMovieComponent,
  },
  {
    path: ":id",
    component: MovieDetailComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
