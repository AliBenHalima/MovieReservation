import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';

@Component({
  selector: 'app-affich-moviecarousel',
  templateUrl: './affich-moviecarousel.component.html',
  styleUrls: ['./affich-moviecarousel.component.css']
})
export class AffichMoviecarouselComponent implements OnInit {

  @Input() movie : Movie ;
  constructor() { }

  ngOnInit(): void {
  }

}
