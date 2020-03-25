import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;
  constructor(private HttpClient: HttpClient) { }

  getToken() {
    return this.token;
  }

  addUser(email: string, pwd: string, username: string) {

    const user: User = { email: email, pwd: pwd, username: username };
    this.HttpClient.post('http://localhost:3000/api/signUp', user)
      .subscribe((resFromBE) => {
        console.log(resFromBE);
      });
  }

  login(email: string, pwd: string) {
    const user: User = { email: email, pwd: pwd, username: null };
    this.HttpClient.post<{ token: string }>('http://localhost:3000/api/signIn', user)
      .subscribe((resFromBE) => {
        console.log(resFromBE);
        this.token = resFromBE.token;
      });
  }

  AdminAddUser(email:string,pwd:string,username:string)
  {

    const user:User = {email:email,pwd:pwd,username:username};
    this.HttpClient.post('http://localhost:3000/employee',user)
    .subscribe((resFromBE)=>{
      console.log(resFromBE);
     });
  }
}
