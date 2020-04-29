import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import {RoleService} from './role.service'

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  users = [];
  current;
  f1=true;
  constructor(private apiService: UserApiService,private _route: ActivatedRoute,private RoleService:RoleService) { }

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





  click(event:MatSlideToggle,role,f1,f2)
  {
    if(event.checked)
    {
      f1.checked=false;
      f2.checked=false;
      console.log(role);
      this.RoleService.ChangeRole(this._route.snapshot.params['id'],role).subscribe((res)=>{});
    }

  }
}
