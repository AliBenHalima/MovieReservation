import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../admin-dashboard/shared/crudUser.service';
import { User } from '../admin-dashboard/shared/crudUser.model';

declare var M: any;

@Component({
  selector: 'app-crudUser',
  templateUrl: './crudUser.component.html',
  styleUrls: ['./crudUser.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

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

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.UserService.postUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshUserList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
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
