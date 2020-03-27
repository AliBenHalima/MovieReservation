import { UserService } from './../admin-dashboard/shared/crudUser.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(public UserService: UserService) { }
public success : boolean = false;

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.UserService.PostMail(form.value).subscribe((res) => {
 console.log(res);
 if(res!=null){
 this.success = true;
 }

    }),
    (error)=>{
      console.log(error);
    };

}
}
