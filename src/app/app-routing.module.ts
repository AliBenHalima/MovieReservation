import { HeaderComponent } from './Main/header/header.component';
import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';



 const routes: Routes = [
  {path: "", component: HeaderComponent},
  {path: "SignIn", component: SignInComponent},
  {path: "SignUp", component: SignUpComponent},
  {path: "NotFound", component: NotFoundComponent},
  {path: "About", component: AboutComponent},
  {path: "**", component: NotFoundComponent}
 
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
