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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { AuthInterceptor } from './sign-up/auth.interceptor';
// import { CrudUsersComponent } from './admin-dashboard/crud-users/crud-users.component';
import { UserlistComponent } from './admin-dashboard/userlist/userlist.component';
import { UserComponent } from './crudUser/crudUser.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ScheduleModule, RecurrenceEditorModule,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import {DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
import { MailComponent } from './mail/mail.component';
import { MoviesComponent } from './movies/movies.component';
import { AfficheMovieHeadComponent } from './AfficheMovies/affiche-movie-head/affiche-movie-head.component';
import { AfficheMovieFootComponent } from './AfficheMovies/affiche-movie-foot/affiche-movie-foot.component';
import { AffichMoviecarouselComponent } from './AfficheMovies/affich-moviecarousel/affich-moviecarousel.component';
import { AfficheMovieHomeMainComponent } from './AfficheMovies/affiche-movie-home-main/affiche-movie-home-main.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { EditReviewsComponent } from './edit-reviews/edit-reviews.component';
import { DeleteReviewComponent } from './delete-review/delete-review.component';
import { ReserveComponent } from './reserve/reserve.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    AboutComponent,
    MoviesComponent,
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
    ReservationComponent,
    AfficheMovieHeadComponent,
    AfficheMovieFootComponent,
    AffichMoviecarouselComponent,
    AfficheMovieHomeMainComponent,
    MovieReviewComponent,
    EditReviewsComponent,
    DeleteReviewComponent,
    ReserveComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ScheduleModule, RecurrenceEditorModule,
    DropDownListModule,DateTimePickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AutocompleteLibModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true},DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
