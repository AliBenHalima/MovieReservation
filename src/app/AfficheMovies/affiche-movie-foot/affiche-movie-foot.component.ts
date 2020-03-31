import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../movies/movie.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-affiche-movie-foot',
  templateUrl: './affiche-movie-foot.component.html',
  styleUrls: ['./affiche-movie-foot.component.css']
})
export class AfficheMovieFootComponent implements OnInit {



  @Input() movie : Movie ;
  _movie;
  // @Output() MessageEmit = new EventEmitter<string>();
  
  
    constructor( ) { }
  
    ngOnInit(): void {
    
  
    }
}
