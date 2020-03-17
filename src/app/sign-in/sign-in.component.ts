import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../sign-up/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public AuthService : AuthService) {  }

  ngOnInit(): void {
  }

  SignIn(form:NgForm)
  {
    console.log("sign In");
    console.log(form.value);
    this.AuthService.login(form.value.email,form.value.pwd);

  }


}
