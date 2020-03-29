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
  readonly baseURL_mail = 'http://localhost:3000/mail/sendmail';

  constructor(private http: HttpClient) { }

  upload(post:FormData) {
    return this.http.post(this.baseURL,post);
  }

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
  PostMail(emp: User) {
    return this.http.post(this.baseURL_mail, emp);
  }

}
