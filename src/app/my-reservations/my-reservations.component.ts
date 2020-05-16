import { HttpClient } from '@angular/common/http';
import { ReservationService } from './../reserve/reservation.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css'],
  providers: [ReservationService]
})
export class MyReservationsComponent implements OnInit {
  rsvs = [];
  username;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
     this.reservationService.getMoviesReservedByUser(this.username).subscribe((res: any) => {
      console.log(res);
      this.rsvs = res.data;
    });
  }
  show() {
    $("button.upload").hide("slow");
    $("div.upload").show("slow");
  }
  hide() {
    $("button.upload").show("slow");
    $("div.upload").hide("slow");
  }
}
