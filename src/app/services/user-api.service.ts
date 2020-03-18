import { User } from './../classes/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserApiService {
    constructor(private http: HttpClient) { }
    getUsers() {
        return this.http.get<User[]>('http://localhost:3000/users/list');
      }
    getUserById(id){
      return this.http.get<User[]>('http://localhost:3000/users/' + id);
    }
}