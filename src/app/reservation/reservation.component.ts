import { Component, OnInit } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {BookingService} from './booking.service';
import { reservationEvent } from './event.model';
import { UploadService } from '../movies/upload.service';
import {hall} from './hall.model';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  // template: "<ejs-schedule ></ejs-schedule>",
  styleUrls: ['./reservation.component.css']
})



export class ReservationComponent implements OnInit {

  halls: SelectItem[];

  selectedhall: hall;

  tab:boolean[] = [true,false];

  change_hall:boolean=false;

  public events:Array<reservationEvent> ;

  actionn=false;

  refresh:boolean = false;

  btn:number = 1;

  reload:boolean = false;

  constructor(private bookingService: BookingService, private moviesService:UploadService) { }



public eventSettings: EventSettingsModel ={
  dataSource:null
};

  load()
  {

    let hall:any = '1';

    if(this.selectedhall)
    hall = this.selectedhall;


    this.bookingService.getEvents(hall).subscribe((resFromBE:{reservations:Array<reservationEvent>}) => {
      this.tab= [true,false];
      this.actionn=true;

      this.eventSettings.dataSource = resFromBE.reservations;

      this.change_hall = false;
      console.log(this.eventSettings.dataSource);
    });


    this.moviesService.getMovies().subscribe((movies:Array<any>)=>{
      console.log(movies);
      movies.forEach(item=>{
        this.StatusData.push({StatusText:item.name});
      });

      // this.StatusData=[{StatusText:'nono'}];

    });

    this.halls = [
      {label:'Hall 1', value: '1'},
      {label:'Hall 2', value:'2'},
      {label:'Hall 3', value:'3'},
      {label:'Hall 4', value:'4'},
      {label:'Hall 5', value:'5'}];
  }

  ngOnInit(): void {
    this.load();
  }

  public dateParser(data:string)
  {
    return new Date(data);
  }

  public StatusFields:object = {value:'StatusText'}

  public StatusData:object[]=[];



cliquer()
{
  console.log(this.selectedhall);
  // let  arr:object[];
  // arr = this.eventSettings.dataSource as object[];
  // console.log("zzz",arr);


  if (this.btn)
  {
    this.refresh = true
    console.log('err');
     this.btn = 0;



    this.bookingService.Add_changes(this.eventSettings.dataSource,this.selectedhall).subscribe((resFromBE)=>{
        this.btn = 1;
        setTimeout (() => {
          this.refresh =false;
       }, 1280);

     });
  }
  }

  select_salle()
{
  this.change_hall = true;
  console.log(this.selectedhall);
  this.eventSettings.dataSource = [];
  this.tab = [false,true];
  this.load();
}


}
