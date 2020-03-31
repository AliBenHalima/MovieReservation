import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog1',
  templateUrl: './catalog1.component.html',
  styleUrls: ['./catalog1.component.css']
})
export class Catalog1Component implements OnInit {
  items=[1,2,3,4,5,6,7,8] ;
  public movies ;
  
  constructor(private apiService: UserApiService) { }

  ngOnInit(): void {
    
    this.apiService.getMovies().subscribe((res: any) => {
      console.log(res);
      this.movies = res.data;
      console.log(this.movies);
    });
  }
}
