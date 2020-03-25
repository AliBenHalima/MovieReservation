import { UserComponent } from './crudUser/crudUser.component';
import { CurrentUserComponent } from './admin-dashboard/users/current-user/current-user.component';
import { PaymentsComponent } from './admin-dashboard/payments/payments.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainComponent } from './Main/main/main.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './admin-dashboard/messages/messages.component';
import { Catalog1Component } from './catalog1/catalog1.component';
import { HeaderComponent } from './Main/header/header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';
import { MailComponent } from './mail/mail.component';



const routes: Routes = [
    { path: "", component: MainComponent, pathMatch: "full" },
    { path: "SignIn", component: SignInComponent },
    { path: "SignUp", component: SignUpComponent },
    { path: "NotFound", component: NotFoundComponent },
    { path: "About", component: AboutComponent },
    { path: "Catalog1", component: Catalog1Component },
    { path: "MovieDetails", component: MovieDetailsComponent }, // when we click on a movie we get Details about that movie
    { path: "Pricing", component: PricingComponent },
    { path: "Help", component: HelpComponent },
    { path: "Contact", component: MailComponent },
    { path: "AdminDashboard/CrudUsers", component: UserComponent },
    { path: "AdminDashboard", component: AdminDashboardComponent, },
    { path: "AdminDashboard/messages", component: MessagesComponent },
    { path: "AdminDashboard/users", component: UsersComponent },
    { path: "AdminDashboard/users/:id", component: CurrentUserComponent },
    { path: "AdminDashboard/payments", component: PaymentsComponent },
    { path: "**", component: NotFoundComponent }


];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
