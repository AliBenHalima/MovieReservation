import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  username: any = localStorage.getItem("username");
  constructor(private http: HttpClient) {}

  getComments(movieId: any) {
    return this.http.get<any>("http://localhost:3000/Comments/" + movieId);
  }

  // Function to like a blog post
  likeComment(id) {
    const CommentData = {
      id: id,
      username: this.username,
      createdBy: this.username,
    };
    return this.http.put("http://localhost:3000/Comments/likeComment/", CommentData);
  }

  // Function to dislike a blog post
  dislikeComment(id) {
    const CommentData = {
      id: id,
      username: this.username,
      createdBy: this.username,
    };
    return this.http.put("http://localhost:3000/Comments/dislikeComment/", CommentData);
  }
  getReviews(movieId: any) {
    return this.http.get<any>("http://localhost:3000/Comments/Reviews/" + movieId);
  }
  getReviewsRating(movieId: any) {
    return this.http.get<any>(
      "http://localhost:3000/Comments/Reviews/Rating/" + movieId
    );
  }
  // removeLocalItem() {
  //   return (this.username = localStorage.removeItem("username"));
  // }
  getSingleComment(Comment_id){
    return this.http.get<any>("http://localhost:3000/Comments/singleComment/" + Comment_id);
  }

  editComment(Comment){
    return this.http.put<any>("http://localhost:3000/Comments/updateComment/", Comment);
  }
  deleteComment(Comment_id){
    return this.http.delete<any>("http://localhost:3000/Comments/deleteComment/"+ Comment_id);
  }
  
}
