import { Component, OnInit } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {BookingService} from './booking.service';
import {reservationEvent} from './event.model';
import {UploadService} from '../movies/upload.service';




@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  // template: "<ejs-schedule ></ejs-schedule>",
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private bookingService: BookingService, private moviesService:UploadService) { }

  public events:Array<reservationEvent> ;

  actionn=false;

  refresh:boolean = false;

  btn:number = 1;

  reload:boolean = false;

public eventSettings: EventSettingsModel ={
  dataSource:this.events
};

  ngOnInit(): void {

      this.bookingService.getEvents().subscribe((resFromBE:{reservations:Array<reservationEvent>}) => {
        this.actionn=true;

        this.eventSettings.dataSource = resFromBE.reservations;

        console.log(this.eventSettings.dataSource);
      });


      this.moviesService.getMovies().subscribe((movies:Array<any>)=>{
        console.log(movies);
        movies.forEach(item=>{
          this.StatusData.push({StatusText:item.name});
        });

        // this.StatusData=[{StatusText:'nono'}];

      });


  }

  public dateParser(data:string)
  {
    return new Date(data);
  }

  public StatusFields:object = {value:'StatusText'}

  public StatusData:object[]=[];


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

  let  arr:object[];
  arr = this.eventSettings.dataSource as object[];
  console.log("zzz",arr);


  if (this.btn)
  {
    this.refresh = true
    console.log('err');
     this.btn = 0;



    this.bookingService.Add_changes(this.eventSettings.dataSource).subscribe((resFromBE)=>{
        this.btn = 1;
        setTimeout (() => {
          this.refresh =false;
       }, 1280);

     });
  }

  //console.log(this.eventSettings.dataSource);

  }

  select_salle(event:any)
{
  console.log(event.target.value);
}


}
