import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reservationEvent} from './event.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  public events:Array<reservationEvent> = [];

  private eventsListener = new Subject<any>();

  constructor(private HttpClient:HttpClient) { }

  get_eventsStatusListener()
  {
    return this.eventsListener.asObservable();
  }

  getEvents()
  {
    return this.HttpClient.get<{reservations:Array<reservationEvent>}>('http://localhost:3000/api/getBookings');
  }

  Add_changes(data:object,salle:any)
  {
    // return this.HttpClient.post('http://localhost:3000/api/saveChanges',data)
    console.log('------------------');
    console.log(salle);
    return null

  }

  get_bookings()
  {


    this.HttpClient.get('http://localhost:3000/api/getBookings')
    .subscribe((resFromBE:{reservations:Array<reservationEvent>})=>{

     this.events = resFromBE.reservations;

     });



  }



}
