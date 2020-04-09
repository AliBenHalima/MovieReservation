import { Component, OnInit  ,HostBinding} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }from '../../sign-up/auth.service'
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [
    trigger('fade',[state('void',style({opacity:0})),
    transition('void => *',[animate(1000)]),
    transition('* => void',[animate(700)]),
  ])
  ]
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

keyword = 'name';
data = [
   {
     id: 1,
     name: 'Usa'
   },
   {
     id: 2,
     name: 'England'
   },
   {
    id: 3,
    name: 'usaam'
  }
];


selectEvent(item) {
  // do something with selected item
}

onChangeSearch(val: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e){
  // do something when input is focused
}


btn:boolean = false;
search()
{
  if(this.btn)
  this.btn = false;
  else
  this.btn = true;
}

}
