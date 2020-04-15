import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email='dsd';

  constructor(public AuthService : AuthService) {  }

  ngOnInit(): void {
  }

  SignUp(form:NgForm)
  {
    console.log("zssds");
    //console.log(form.value);
    this.AuthService.addUser(form.value.email,form.value.pwd,form.value.username);
    console.log(form.value);
  }

}
