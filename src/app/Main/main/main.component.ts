import { MLservicesService } from './../../services/mlservices.service';
import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {
	movies;
	Users
	constructor(private apiService: UserApiService , private MLservicesService:MLservicesService) {}

	ngOnInit(): void {
		this.apiService.getMovies().subscribe((res: any) => {
			console.log(res);
			this.movies = res.data;
			console.log(this.movies);
		});
	}

// ML Code
getListUsers(){
	this.MLservicesService.getListUsers().subscribe(data=>{
	  if(!data){
		console.log("Error");
	  }else{
  
	console.log("showing data ");
  
	  console.log(data.data);
	  this.CommentsList = data.data ;
	}
	});
  }
  getListMovies(){
	this.MLservicesService.getListMovies().subscribe(data=>{
	  if(!data){
		console.log("Error");
	  }else{
  
	console.log("showing data ");
  
	  console.log(data.data);
	  this.CommentsList = data.data ;
	}
	});
  }





}
