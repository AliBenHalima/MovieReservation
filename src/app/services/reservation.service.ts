import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}



  // for Movie reserved
  getMoviesReservedByUser(username){
    return this.http.get('http://localhost:3000/reservation/getMoviesReservedByUser/' + username);
    
    };
}
