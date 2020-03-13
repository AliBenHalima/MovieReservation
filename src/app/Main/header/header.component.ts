import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  // GoToSignin(){
  //   this.router.navigate(["SignIn"],{relativeTo : this.route });
  // }
}
