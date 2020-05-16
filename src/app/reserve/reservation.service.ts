import { Salle } from './salle.model';
import { Booking } from './../movies/booking.model';
import { Reservation } from './reservation.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReservationService{
    constructor(private HttpClient:HttpClient,private router:Router) {}

    postReservation(userName,name,lastname,phone,nbPlaces,date,salle,film){
        return this.HttpClient.post('http://localhost:3000/reservation/newReservation',{userName:userName,name:name,lastname:lastname,phone:phone,nbPlaces:nbPlaces,date:date,salle:salle,film:film})
        .subscribe((res)=>{
            console.log(res);
            this.router.navigate(['/']);
        });
    }
    getMoviesReservedByUser(username){
        return this.HttpClient.get<Reservation[]>('http://localhost:3000/reservation/getMoviesReservedByUser/' + username);
    }
    getSalle(num){
        return this.HttpClient.get<Salle[]>('http://localhost:3000/reservation/getSalle/' + num);
    }
    reduceNbPlaces(num,nb){
        return this.HttpClient.post('http://localhost:3000/reservation/reduceNbPlaces',{num:num,nb:nb})
        .subscribe((res)=>{
            console.log(res);
        });
    }
}
