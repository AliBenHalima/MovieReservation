import { ActivatedRoute } from '@angular/router';
import { UserApiService } from './../../services/user-api.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';

@Component({
  selector: 'app-affiche-movie-head',
  templateUrl: './affiche-movie-head.component.html',
  styleUrls: ['./affiche-movie-head.component.css']
})
export class AfficheMovieHeadComponent implements OnInit {

  @Input() movie : Movie ;
  movies;
  public _movie;
    //  user=[] ;
  
  name : String;
  // @Output() MessageEmit = new EventEmitter <string>();
  
  
    constructor(private apiService: UserApiService,private _route: ActivatedRoute) { }
  
    ngOnInit(): void {
     
    }
    
}
