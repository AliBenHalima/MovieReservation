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

  getEvents(hall:any)
  {
    return this.HttpClient.get<{reservations:Array<reservationEvent>}>('http://localhost:3000/api/getBookings/'+hall);
  }

  Add_changes(data:object,hall:any)
  {
    if(!hall)
      hall = '1';

    return this.HttpClient.post('http://localhost:3000/api/saveChanges',{reservations:data,salle:hall});
  }


  getEventsByHall()
  {

  }

  get_bookings()
  {


    this.HttpClient.get('http://localhost:3000/api/getBookings')
    .subscribe((resFromBE:{reservations:Array<reservationEvent>})=>{

     this.events = resFromBE.reservations;

     });



  }



}
