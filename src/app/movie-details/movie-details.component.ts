import { UserService } from './../admin-dashboard/shared/crudUser.service';
import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie;
  loadingBlogs=false;
  NewPost;
  username;
  
  
  
  constructor(private apiService: UserApiService ,private _route: ActivatedRoute,public UserApiService: UserApiService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
  this.apiService.getMovieByName(this._route.snapshot.params['name']).subscribe((res: any) => {
    console.log(res);
    this.movie = res.data;
    console.log(this.movie);
});});

this.UserApiService.getUsers().subscribe(profile => {
  this.username = profile.user.username; // Used when creating new blog posts and comments
});
}


reloadBlogs() {
  this.loadingBlogs = true; // Used to lock button
  // this.getAllBlogs(); // Add any new blogs to the page
  setTimeout(() => {
    this.loadingBlogs = false; // Release button lock after four seconds
  }, 2000);
}
draftComment(){

}
AddComment(){
  this.NewPost= true ;
}
CancelForm(){
  this.NewPost= false ;
}
onSubmit(form: NgForm){
  // this.UserApiService.getUserByName(form["username"]);
  const blog = {
    title: form.value.title, // Title field
    body: form.value.body, // Body field
    createdBy: this.username // CreatedBy field
  }
console.log(blog);
}
}
