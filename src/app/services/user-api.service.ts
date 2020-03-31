import { User } from './../classes/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies/movie.model';

@Injectable({providedIn: 'root'})
export class UserApiService {
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
  }

    
