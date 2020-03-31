import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';

@Component({
  selector: 'app-affiche-movie-home-main',
  templateUrl: './affiche-movie-home-main.component.html',
  styleUrls: ['./affiche-movie-home-main.component.css']
})
export class AfficheMovieHomeMainComponent implements OnInit {

  @Input() movie : Movie 
  constructor() { }

  ngOnInit(): void {
  }

}
