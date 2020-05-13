import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/crudUser.service';
import { User } from '../shared/crudUser.model';

declare var M: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  
  image = null;

  constructor(public UserService: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.UserService.selectedUser = {
      _id: "",
      email: "",
      pwd: "",
      username: "",

    }
  }

  onImgSelected(event:Event)
  {
    console.log("event trigged");
    this.image = (event.target as HTMLInputElement).files[0];
  }


  onSubmit(form: NgForm) {
    // console.log("enter upload");
    // const data = new FormData();
    // if(this.image)
    // data.append("image",this.image,this.image.name);
    // data.append("email",form.value.email);
    // data.append("pwd",form.value.pwd);
    // data.append("username",form.value.username);
    // console.log(form.value);

    // console.log(this.image);
    // this.UserService.upload(data).subscribe((res)=>{
    //   console.log("sds");
    // });


    //------------------
    if (form.value._id == "") {

      console.log("enter upload");
      const data = new FormData();
      if(this.image)
      data.append("image",this.image,this.image.name);
      data.append("email",form.value.email);
      data.append("pwd",form.value.pwd);
      data.append("username",form.value.username);
      console.log(form.value);

      console.log(this.image);
      this.UserService.upload(data).subscribe((res)=>{
        console.log("sds");
        this.resetForm(form);
        this.refreshUserList();
        //M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });


    }
    else {
      this.UserService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshUserList() {
    this.UserService.getUserList().subscribe((res) => {
      this.UserService.Users = res as User[];
    });
  }

  onEdit(emp: User) {
    this.UserService.selectedUser = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.UserService.deleteUser(_id).subscribe((res) => {
        this.refreshUserList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


  
}
