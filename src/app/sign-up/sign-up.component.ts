import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {

  email='dsd';

  constructor(public AuthService : AuthService,private messageService: MessageService) {  }

  ngOnInit(): void {
  }

  addSingle(error:string) {
    this.messageService.add({severity:'error', summary:error, detail:'Please verify your informations'});
}

  SignUp(form:NgForm)
  {
    console.log("zssds");
    //console.log(form.value);
    this.AuthService.addUser(form.value.email,form.value.pwd,form.value.username);
    console.log(form.value);
  }

}
