import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.auth)
          this.router.navigate(['/SignIn'])
      return this.authService.auth;
  }

}

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private authService:AuthService,private router:Router){}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(!this.authService.auth)
            this.router.navigate(['/SignIn'])
        console.log(this.authService.auth)
        return this.authService.auth;
    }
}
