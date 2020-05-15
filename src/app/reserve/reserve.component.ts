import { ReservationService } from './reservation.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../services/user-api.service';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  providers: [ReservationService]
})
export class ReserveComponent implements OnInit {
  movie;
  bookings=[];
  roomSearch=[];
  usernameResvation;
  salle;
  nbPlaces;
  constructor(private apiService: UserApiService ,private _route: ActivatedRoute,private reservationService: ReservationService,private router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.apiService.getMovieByID(this._route.snapshot.params['name']).subscribe((res: any) => {
        console.log(res);
        this.movie = res.data;
        console.log(this.movie);
        if(this.movie==null){
          this.router.navigate(['/nomoviesfound']);
        }
      });
      this.apiService.getDatesByMovieName(this._route.snapshot.params['name']).subscribe((res: any) => {
        console.log(res);
        this.bookings = res.data;
        console.log(this.bookings);
      });
    });
    this.usernameResvation = localStorage.getItem('username');
  }

  async onSubmit(form : NgForm){
    console.log(form.value);
    this.nbPlaces=form.value.nbPlaces;
    await this.apiService.getObjectForRoom(this._route.snapshot.params['name'],form.value.date).subscribe((res: any) => {
      console.log(res);
      this.roomSearch = res.data;
      console.log(this.roomSearch);
      console.log(this.roomSearch[0]["salle"]);
      this.salle=this.roomSearch[0]["salle"];
      console.log(this.salle);

      this.reservationService.getSalle(this.salle).subscribe((res: any) => {console.log(res);
        var resultat=[];
        resultat=res.data;
        console.log(resultat);
        var nbplacesdispo = resultat["placesdispo"];
        if (form.value.nbPlaces>nbplacesdispo) {console.log('mayjiiiiich')}
        else{
          console.log(form.value.nbPlaces);
          this.reservationService.reduceNbPlaces(this.salle,this.nbPlaces);
          this.reservationService.postReservation(this.usernameResvation,form.value.name,form.value.lastname,form.value.phone,form.value.nbPlaces,form.value.date,this.roomSearch[0]["salle"],this._route.snapshot.params['name']);
        }
      });
      
    });
  }

}
