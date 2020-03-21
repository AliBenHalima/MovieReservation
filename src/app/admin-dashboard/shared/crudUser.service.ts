import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './crudUser.model';

@Injectable()
export class UserService {
  selectedUser: User;
  Users: User[];
  readonly baseURL = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) { }

  postUser(emp: User) {
    return this.http.post(this.baseURL, emp);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  putUser(emp: User) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
