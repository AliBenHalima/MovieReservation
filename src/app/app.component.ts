import { Component, OnInit} from '@angular/core';
import {AuthService} from './sign-up/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project';

 constructor(private authService: AuthService){}

 ngOnInit(): void {
   this.authService.checkAuth();
  }

}
