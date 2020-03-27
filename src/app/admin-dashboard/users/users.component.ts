import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private apiService: UserApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res.data;
    });
  }
}
