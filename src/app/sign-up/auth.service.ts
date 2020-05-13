import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user.model'
import {Subject} from 'rxjs'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth = false;
  private token = null;
  private Tokentimer:any;
  private authStatusListener = new Subject<boolean>();
  private username : string;

  private errorListener = new Subject<string>();
  public connected = false;

  get_userName()
  {
    return this.username;
  }

  constructor(private HttpClient:HttpClient,private router:Router){}



  get_ErrorListener()
  {
    return this.errorListener.asObservable();
  }


  get_authStatusListener()
  {
    return this.authStatusListener.asObservable();
  }

  getToken()
  {
    return this.token;
  }

  addUser(email:string,pwd:string,username:string)
  {

    const user:User = {email:email,pwd:pwd,username:username};
    this.HttpClient.post('http://localhost:3000/api/signUp',user)
    .subscribe((resFromBE)=>{
      console.log(resFromBE);
      this.router.navigate(['/SignIn']);
     });
  }

  login(email:string,pwd:string)
  {
    const user:User = {email:email,pwd:pwd,username:null};
    this.HttpClient.post<any>('http://localhost:3000/api/signIn',user)
    .subscribe((resFromBE)=>{

      console.log(resFromBE);

      if(resFromBE.token)
      {
        this.connected = true;
        // this.Tokentimer = setTimeout(() => {this.logout();}, resFromBE.expiresIn * 1000);
        this.Tokentimer = this.Timer(resFromBE.expiresIn);
        this.auth=true;
        this.token =  resFromBE.token;
        this.username = resFromBE.user.username;
        this.authStatusListener.next(true);

        const now = new Date();
        const expirationDate = new Date(now.getTime() + resFromBE.expiresIn * 1000);
        console.log("exo",expirationDate);
        this.saveAuthData(this.token,expirationDate);
        this.saveUsername(this.username);
        this.router.navigate(['/']);

      }
      else
      this.errorListener.next(resFromBE.error);


     });
  }

  Timer(duration:number)
  {
    setTimeout(() => {this.logout();}, duration * 1000);
  }

  logout()
  { this.auth = false;
    this.token = null;
    this.authStatusListener.next(false);
    clearTimeout(this.Tokentimer);
    this.clearAuthData();
    this.router.navigate(["/"]);

   }

  AdminAddUser(email:string,pwd:string,username:string)
  {

    const user:User = {email:email,pwd:pwd,username:username};
    this.HttpClient.post('http://localhost:3000/employee',user)
    .subscribe((resFromBE)=>{
      console.log(resFromBE);
     });
  }

  private saveAuthData(token: string,expirationDate:Date)
{
 localStorage.setItem('token',token);4
 localStorage.setItem('expirationDate',expirationDate.toISOString());
}
 private saveUsername(username : string ){
  localStorage.setItem('username',username);
 }

private clearAuthData()
{
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("username");
}

getAthData()
{
  const token = localStorage.getItem('token')
  if(!token)

    return;
  else
  {
    const expirationDate = localStorage.getItem('expirationDate');
    if (!expirationDate)
      return;
    else
      return {token:token,expirationDate: new Date(expirationDate)};
  }
}


checkAuth()
{
  const info = this.getAthData();

  if(info)
  {
  const now = new Date();
  const expiresIn = info.expirationDate.getTime() - now.getTime();
  if(expiresIn > 0)
      {
        this.token = this.getAthData().token;
        this.auth = true;
        this.Timer(expiresIn/1000);
        this.authStatusListener.next(true);
      }

}   }

}


