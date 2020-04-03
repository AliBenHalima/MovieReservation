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

  Add_changes(data:object)
  {
    this.HttpClient.post('http://localhost:3000/api/saveChanges',data)
    .subscribe((resFromBE)=>{
      console.log(resFromBE);

     });
  }

  get_bookings()
  {


    this.HttpClient.get('http://localhost:3000/api/getBookings')
    .subscribe((resFromBE:{reservations:Array<reservationEvent>})=>{
      //console.log(resFromBE.reservations);

     // console.log(resFromBE.reservations[0].IsReadonly);
     //this.books = resFromBE.reservations;

     this.events = resFromBE.reservations;

     this.eventsListener.next([  {
      Subject: 'Paris2',
      StartTime: new Date(2020, 3, 2, 9, 30),
      EndTime: new Date(2020, 3, 2, 10, 0),
      IsReadonly: true,
      salle:"ssqd"
    }]);

     });



  }



}
