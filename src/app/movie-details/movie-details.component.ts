import { UserService } from './../admin-dashboard/shared/crudUser.service';
import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../services/blog.service';

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
  CommentsList;
  movieId;
  
  
  
  constructor(private apiService: UserApiService ,
    private _route: ActivatedRoute,public UserApiService: UserApiService,public blogservice:BlogService) { }

  ngOnInit(): void {
    // this.UserApiService.getUsersBlog().subscribe(profile => {
    //   console.log("xatr");
    //   if(profile){

    
    //   console.log(profile);
    //   this.username = "aaaa";
    //   console.log(this.username); 
    //     }
    //     // Used when creating new blog posts and comments
    // });

    this._route.paramMap.subscribe((params: ParamMap) => {
  this.apiService.getMovieByName(this._route.snapshot.params['name']).subscribe((res: any) => {
    console.log(res);
    this.movie = res.data;
    this.movieId=res.data._id;

    console.log(this.movie);
});});

this.username = localStorage.getItem('username');
this.getAllBlogs();
}

getAllBlogs(){
  this.blogservice.getComments(this.movieId).subscribe(data=>{
    if(!data){
      console.log("Error");
    }else{

  console.log("showing data ");
    console.log(data.data);
    this.CommentsList = data.data ;
  }
  });
}

reloadBlogs() {
  this.loadingBlogs = true;
  this.getAllBlogs();
   // Used to lock button
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
    createdBy: this.username,
    PostedFor : this.movieId // CreatedBy field
  }

console.log(blog);
this.UserApiService.PostBlog(blog).subscribe( data =>{
  if(data.success){
    this.NewPost=false ;
    this.reloadBlogs();
  }else{
    window.alert("Error in Posting Comment" );
  }
  console.log(data);

});

}

 // Function to like a blog post
 likeBlog(id) {
  // Service to like a blog post
  this.blogservice.likeBlog(id).subscribe(data => {
    console.log(data);
    this.getAllBlogs(); // Refresh blogs after like
  });
}

// Function to disliked a blog post
dislikeBlog(id) {
  // Service to dislike a blog post
  this.blogservice.dislikeBlog(id).subscribe(data => {
    console.log(data);
    this.getAllBlogs(); // Refresh blogs after dislike
  });
}
}
