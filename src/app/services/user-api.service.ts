import { User } from './../classes/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Movie } from '../movies/movie.model';
import { Booking } from './../movies/booking.model';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  authToken;
  options;
    constructor(private http: HttpClient) { }
    getUsers() {
        return this.http.get<User[]>('http://localhost:3000/users/list');
      }
    getUserById(id){
      return this.http.get<User[]>('http://localhost:3000/users/' + id);
    }


    getMovies() {
      return this.http.get<Movie[]>('http://localhost:3000/films/list');
    }
    getMovieByName(name){
      return this.http.get<Movie[]>('http://localhost:3000/films/' + name);
    }
    // getMovieImage(file){
    //   return this.http.get<Movie[]>('http://localhost:3000/films/image' + file);
    // }
    getLatestMovies(){
      return this.http.get<Movie[]>('http://localhost:3000/films/Latest');
    }

    UpdateMovieRating(movie_id,rating ){
      return this.http.put<any>("http://localhost:3000/films/UpdateMovieRating/" + movie_id, rating);
    }

    createAuthenticationHeaders() {
      this.loadToken(); // Get token so it can be attached to headers
      // Headers configuration options
      this.options = new RequestOptions({
        headers: new Headers({
          'Content-Type': 'application/json', // Format set to JSON
          'authorization': this.authToken // Attach token
        })
      });
    }
    loadToken() {
      this.authToken = localStorage.getItem('token');
      console.log(this.authToken) ; // Get token and asssign to variable to be used elsewhere
    }
    getUsersBlog() {
      this.createAuthenticationHeaders(); // Create headers before sending to API
      return this.http.get<User[]>('http://localhost:3000/Comments/profile'+ this.options);

    }

    PostComment(blog:any){
      return this.http.post<any>('http://localhost:3000/Comments/newComment', blog).map(res => res);
    }
    PostReview(review:any){
      return this.http.post<any>('http://localhost:3000/reviews/newreview', review).map(res => res);
    }
    getMovieByID(id){
      return this.http.get<Movie[]>('http://localhost:3000/bookings/' + id);
    }
    getDatesByMovieName(name) {
      return this.http.get<Booking[]>('http://localhost:3000/bookings/dates/' + name);
    } 
    
    getObjectForRoom(film,date){
      console.log(film+' '+date);
      return this.http.post<any>('http://localhost:3000/bookings/getObjectForRoom',{film:film,date:date});
  }
  
  }


