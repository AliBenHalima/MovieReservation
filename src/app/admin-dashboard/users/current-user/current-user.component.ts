import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  users = [];
  current;
  constructor(private apiService: UserApiService,private _route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res.data;
    });
    
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.apiService.getUserById(this._route.snapshot.params['id']).subscribe((res: any) => {
        console.log(res);
        this.current = res.data;
        console.log(this.current);
    });});
  }
}