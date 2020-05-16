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
  val: number;

  movie;
  loadingComment=false;
  NewPost:boolean;
  username ;
  CommentsList;
  movieId;
  NewReview;
  loadingReviews=false;
  ReviewsList;
  rating ; 
  CurrentComment;
  commentToDelete;
  EmptyReviewList=false;
  
  
  

  addComment:boolean = true;




  constructor(private apiService: UserApiService ,
    private _route: ActivatedRoute,public UserApiService: UserApiService,public blogservice:BlogService) { }

  ngOnInit(): void {
  this.NewPost = false;

    this._route.paramMap.subscribe((params: ParamMap) => {
    this.apiService.getMovieByName(this._route.snapshot.params['name']).subscribe((res: any) => {
    console.log(res);
    this.movie = res.data;
    this.movieId=res.data._id;

    this.blogservice.getComments(this.movieId).subscribe(data=>{
      if(!data){
        console.log("Error");
      }else{

    console.log("showing data ");

      console.log(data.data);
      this.CommentsList = data.data ;
    }
    });

    console.log(this.movie);
});});

 


this.username = localStorage.getItem('username');
this.getAllComments();
this.getAllReviews();

this.AddReview();
  }
  onClik(comment){

    this.CurrentComment = comment;
  }




  func(){
    this.blogservice.getReviewsRating(this.movieId).subscribe(data=>{
      if(!data){
        console.log("Error Rating" );
      }else{

    console.log("showing data Rating &&");
      console.log(data);

      this.CommentsList = data.data ;
    }
    });
  }
getAllComments(){
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

reloadComments() {
  this.loadingComment = true;
  this.getAllComments();
   // Used to lock button
  // this.getAllBlogs(); // Add any new blogs to the page
  setTimeout(() => {
    this.loadingComment = false; // Release button lock after four seconds
  }, 2000);
}
draftComment(){

}
AddComment(){
  this.addComment = false;
  this.NewPost= true ;
}
CancelForm(){
  this.NewPost= false ;
}
onSubmit(form: NgForm){
  // this.UserApiService.getUserByName(form["username"]);
  const blog = {
     // Title field
    body: form.value.body, // Body field
    createdBy: this.username,
    PostedFor : this.movieId // CreatedBy field
  }

console.log(blog);
this.UserApiService.PostComment(blog).subscribe( data =>{
  if(data.success){
    this.NewPost=false ;
    this.reloadComments();
   
  }else{
    window.alert(data.message);
  }
  console.log(data);

});

this.addComment = true;
}
setCurrentComment(comment){
  this.commentToDelete =comment;
}
 // Function to like a blog post
 likeComment(id) {
  // Service to like a blog post
  this.blogservice.likeComment(id).subscribe(data => {
    console.log(data);
    console.log(this.username);
    this.getAllComments(); // Refresh blogs after like
  });
}

// Function to disliked a blog post
dislikeComment(id) {
  // Service to dislike a blog post
  this.blogservice.dislikeComment(id).subscribe(data => {
    console.log(data);
    console.log(this.username);
    this.getAllComments(); // Refresh blogs after dislike
  });
}

//Reviews Section
reloadReviews(){
  this.loadingReviews = true;
  this.getAllReviews();
   // Used to lock button
  // this.getAllBlogs(); // Add any new blogs to the page
  setTimeout(() => {
    this.loadingReviews = false; // Release button lock after four seconds
  }, 2000);
}

getAllReviews(){
  this.blogservice.getReviews(this.movieId).subscribe(data=>{
    if(!data){
      console.log("Error");
    }else{

  console.log("showing data of Reviews ");
    console.log(data.data);
    if(data.data.length == 0){
      this.EmptyReviewList= true;
    }
  this.Calculate_Rating(data.data);
    this.ReviewsList = data.data ;
  }
  });
}

Calculate_Rating(obj : any){
  var i =0;
  obj.forEach(element =>{
    // console.log(element.ReviewRating);
    i = i + element.ReviewRating;

  });

  this.rating ={
    rating : i/obj.length
  }
  this.UpdateMovieRating(this.rating);
  this.movie.rating= this.rating.rating ;
  console.log(i/obj.length);
   console.log(obj.length);


}
UpdateMovieRating(obj){
  this.UserApiService.UpdateMovieRating(this.movieId,obj).subscribe(data=>{
    if(!data){
      console.log('error');
    }
      else{
        console.log(data);
      }
});}



onSubmitReview(form: NgForm){
  const Review = {
    title: form.value.title, // Title field
    body: form.value.body,   // Body field
    ReviewRating:form.value.ReviewRating,
    createdBy: this.username,
    PostedFor : this.movieId // CreatedBy field
  }

console.log(Review);
this.UserApiService.PostReview(Review).subscribe( data =>{
  if(data.success){
    this.NewReview=false ;
    this.EmptyReviewList= false;
    this.reloadReviews();
  }else{
    window.alert(data.message );
  }
  console.log(data);
});}
AddReview(){
  this.NewReview= true ;
}
CancelFormReview(){
  this.NewReview= false ;
}
deleteComment(id){
  // if (confirm('Are you sure to delete this Comment ?') == true) {
this.blogservice.deleteComment(id).subscribe(data=>{
  console.log(data);
  if(data.success){
    this.reloadComments();
  }
});
// }
}

}
