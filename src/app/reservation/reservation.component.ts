import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  // template: "<ejs-schedule ></ejs-schedule>",
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { this.eventSettings.dataSource}


  ngOnInit(): void {
    this.eventSettings.dataSource
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

  public datz: object[] = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2020, 2, 24, 4, 30),
    EndTime: new Date(2020, 2, 24, 6, 0),
    IsReadonly: true
},
{
Id: 2,
Subject: 'yyy',
StartTime: new Date(2020, 2, 24, 7, 30),
EndTime: new Date(2020, 2, 24, 8, 0),
IsReadonly: true
},


];


public selectedDate: Date = new Date(2018, 1, 15);
public eventSettings: EventSettingsModel = {
    dataSource: this.datz,

};

cliquer()
{
  console.log(this.eventSettings.dataSource);
}

}
