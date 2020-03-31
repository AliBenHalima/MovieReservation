import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie;
  constructor(private apiService: UserApiService ,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
  this.apiService.getMovieByName(this._route.snapshot.params['name']).subscribe((res: any) => {
    console.log(res);
    this.movie = res.data;
    console.log(this.movie);
});});
}

}
