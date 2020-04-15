import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  username = localStorage.getItem('username');
  constructor(private http:HttpClient) { }

getComments(movieId : any){
  return this.http.get<any>('http://localhost:3000/blogs/' + movieId);
}


  // Function to like a blog post
  likeBlog(id) {
    const blogData = { id: id , username : this.username};
    return this.http.put('http://localhost:3000/blogs/likeBlog/',blogData);
  }

  // Function to dislike a blog post
  dislikeBlog(id) {
    const blogData = { id: id , username : this.username };
    return this.http.put('http://localhost:3000/blogs/dislikeBlog/',blogData);
  }

}
