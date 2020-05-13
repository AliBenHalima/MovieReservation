import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../sign-up/auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {

  private errorListenerSub : Subscription;

  refresh:boolean = false;


  constructor(public AuthService : AuthService,private messageService: MessageService) {  }

  addSingle(error:string) {
    this.messageService.add({severity:'error', summary:error, detail:'Please verify your informations'});
}

  ngOnInit(): void {
     this.errorListenerSub = this.AuthService.get_ErrorListener().subscribe((res)=>
    {
        console.log(res);
        this.addSingle(res);
        this.refresh = false;

    });
  }

  SignIn(form:NgForm)
  {
    this.refresh = true;
    console.log("sign In");
    console.log(form.value);
    this.AuthService.login(form.value.email,form.value.pwd);



  }


}
