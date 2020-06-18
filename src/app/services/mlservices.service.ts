import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MLservicesService {

  constructor(private http: HttpClient) {}

  getListUsers() {
    return this.http.get<any>("http://localhost:3000/similarity/listUsers");
  }

  getListMovies() {
    return this.http.get<any>("http://localhost:3000/similarity/listMovies");
  }




}
