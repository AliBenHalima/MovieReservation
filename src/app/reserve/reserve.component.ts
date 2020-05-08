import { ReservationService } from './reservation.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../services/user-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  providers: [ReservationService]
})
export class ReserveComponent implements OnInit {
  movie;
  bookings=[];
  roomSearch;
  constructor(private apiService: UserApiService ,private _route: ActivatedRoute,private reservationService: ReservationService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.apiService.getMovieByID(this._route.snapshot.params['name']).subscribe((res: any) => {
        console.log(res);
        this.movie = res.data;
        console.log(this.movie);
      });
      this.apiService.getDatesByMovieName(this._route.snapshot.params['name']).subscribe((res: any) => {
        console.log(res);
        this.bookings = res.data;
        console.log(this.bookings);
      });
    });
  }

  async onSubmit(form : NgForm){
    console.log(form.value);
    await this.apiService.getObjectForRoom(this._route.snapshot.params['name'],form.value.date).subscribe((res: any) => {
      console.log(res);
      this.roomSearch = res.data;
      console.log(this.roomSearch.salle);
    });
    this.reservationService.postReservation('ttt',form.value.name,form.value.lastname,form.value.phone,form.value.nbPlaces,form.value.date,'salle',this._route.snapshot.params['name']);
  }

}
