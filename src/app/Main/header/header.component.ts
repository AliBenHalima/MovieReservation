import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }from '../../sign-up/auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = this.authService.auth;
  private authListenerSub : Subscription;
  constructor(private router : Router,private authService : AuthService) {

  }

  ngOnInit(): void {
    this.authListenerSub = this.authService.get_authStatusListener().subscribe(isAuthenticated=>{
      this.isAuthenticated=isAuthenticated;

    });
  }
  
  onLogout()
  {
    this.authService.logout();
  }

  ngOnDestroy()
  {
    this.authListenerSub.unsubscribe();
  }
// OnSelect(){
//   this.router.navigate(['/SignIn'],{relativeTo: this.route});
// }
}
