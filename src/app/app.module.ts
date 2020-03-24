import { UserService } from './admin-dashboard/shared/crudUser.service';
import { CurrentUserComponent } from './admin-dashboard/users/current-user/current-user.component';
// import { TestHeaderComponent } from './test-header/test-header.component';
import { Catalog1Component } from './catalog1/catalog1.component';
import { FooterComponent } from './Main/footer/footer.component';
import { HeaderComponent } from './Main/header/header.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { AuthInterceptor } from './sign-up/auth.interceptor';
// import { CrudUsersComponent } from './admin-dashboard/crud-users/crud-users.component';
import { UserlistComponent } from './admin-dashboard/userlist/userlist.component';
import { UserComponent } from './crudUser/crudUser.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';
import { MailComponent } from './mail/mail.component';


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
    CurrentUserComponent,
    HeaderComponent,
    FooterComponent,
    Catalog1Component,
    UserComponent,
    UserlistComponent,
    MovieDetailsComponent,
    PricingComponent,
    HelpComponent,
    MailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true},UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
