import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
movies
  constructor(private apiService: UserApiService) { }

  ngOnInit(): void {
    
    this.apiService.getMovies().subscribe((res: any) => {
      console.log(res);
      this.movies = res.data;
      console.log(this.movies);
    });
  }

}
