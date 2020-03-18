import { PaymentsComponent } from './admin-dashboard/payments/payments.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Main/main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { CurrentUserComponent } from './admin-dashboard/users/current-user/current-user.component';
=======
import { Catalog1Component } from './catalog1/catalog1.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { HeaderComponent } from './Main/header/header.component';
import { FooterComponent } from './Main/footer/footer.component';
>>>>>>> 49f698c90e1f6df225d48b25277edb609b4d1175

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    AboutComponent,
    AdminDashboardComponent,
    MessagesComponent,
    UsersComponent,
    PaymentsComponent,
<<<<<<< HEAD
    CurrentUserComponent
=======
    Catalog1Component,
    TestHeaderComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> 49f698c90e1f6df225d48b25277edb609b4d1175
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
