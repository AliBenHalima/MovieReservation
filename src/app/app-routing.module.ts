import { PaymentsComponent } from './admin-dashboard/payments/payments.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {  MainComponent } from './Main/main/main.component';
import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { Catalog1Component } from './catalog1/catalog1.component';
import { HeaderComponent } from './Main/header/header.component';



 const routes: Routes = [
  {path: "", component: MainComponent , pathMatch: "full"},
  {path: "SignIn", component: SignInComponent,pathMatch:"prefix"},
  {path: "SignUp", component: SignUpComponent,pathMatch:"prefix"},
  {path: "NotFound", component: NotFoundComponent,pathMatch:"prefix"},
  {path: "About", component: AboutComponent,pathMatch:"prefix"},
  {path: "Catalog1", component: Catalog1Component,pathMatch:"prefix" },
  {path: "AdminDashboard", component: AdminDashboardComponent,},
  {path: "AdminDashboard/messages", component: MessagesComponent},
  {path: "AdminDashboard/users", component: UsersComponent},
  {path: "AdminDashboard/payments", component: PaymentsComponent},
  {path: "**", component: NotFoundComponent}
  
 
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
