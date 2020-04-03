import { Component, OnInit } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {BookingService} from './booking.service';
import {reservationEvent} from './event.model';




@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  // template: "<ejs-schedule ></ejs-schedule>",
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  public events:Array<reservationEvent> ;

  actionn=false;

  refresh:boolean = true;

public eventSettings: EventSettingsModel ={
  dataSource:this.events
};

  ngOnInit(): void {

      this.bookingService.getEvents().subscribe((resFromBE:{reservations:Array<reservationEvent>}) => {
        this.actionn=true;

        this.eventSettings.dataSource = resFromBE.reservations;

        console.log(this.eventSettings.dataSource);
      });


  }

  public dateParser(data:string)
  {
    return new Date(data);
  }

  public StatusFields:object = {value:'StatusText'}

  public StatusData:object[] =[
    {StatusText : 'old'},
    {StatusText : 'medium'},
    {StatusText : 'new'}
  ];


  public datz: object[] = [
  {
  Subject: 'Paris',
  StartTime: new Date(2020, 3, 2, 14, 30),
  EndTime: new Date(2020, 3, 2, 16, 0),
  IsReadonly: true
  },
  {
    Subject: 'Paris2',
    StartTime: new Date(2020, 3, 2, 9, 30),
    EndTime: new Date(2020, 3, 2, 10, 0),
    IsReadonly: true
  }


];



cliquer()
{
  // console.log(this.eventSettings.dataSource);
  // this.bookingService.Add_changes(this.eventSettings.dataSource);

  // console.log(this.eventSettings.dataSource[0].EndTime);

  // console.log(this.eventSettings.dataSource[1].EndTime);

  // location.reload();



 if(this.refresh)
{

 this.eventSettings.dataSource = [  {
  Subject: 'Paris2222',
  StartTime: new Date(2020, 3, 3, 9, 30),
  EndTime: new Date(2020, 3, 3, 10, 0),
  IsReadonly: true
}
];

 this.refresh = false;

}

 else
 this.refresh = true;


}

}
