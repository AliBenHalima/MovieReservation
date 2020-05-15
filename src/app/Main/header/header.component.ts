import { Component, OnInit  ,HostBinding} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService }from '../../sign-up/auth.service'
import { Subscription } from 'rxjs';
import {Subject} from 'rxjs'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BlogService } from 'src/app/services/blog.service';
import { UploadService } from '../../movies/upload.service';

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

  movies;

  private UsernameListener = new Subject<String>();

  constructor(private router : Router,private authService : AuthService,private blogservice:BlogService,public UploadService:UploadService) {

  }

  active:boolean= false;

  ngOnInit(): void {
    this.authListenerSub = this.authService.get_authStatusListener().subscribe(isAuthenticated=>{
      this.isAuthenticated=isAuthenticated;

      this.UploadService.getMoviesByUser().subscribe((res) => {
        this.active = true;
        console.log(this.active);
        this.movies = res;
        console.log(this.movies);

        // this.movies.forEach(movie => {

        // });
        this.data.push(  {
          id: 1,
          name: this.movies[0].name
        });




      });



    });

    // this.get_UsernameListener().subscribe(resp=>{
    //   if(resp){
    //   this.blogservice.username=resp ;
    // }
    // });

  }

  // get_UsernameListener()
  // {
  //   return this.UsernameListener.asObservable();
  // }

  onLogout()
  {
    this.authService.logout();
    window.location.reload();
    // this.UsernameListener.next('');

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
    name: 'usa'
  },
  {
    id: 2,
    name: 'England'
  },
  {
   id: 3,
   name: 'usaam'
 }];


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
