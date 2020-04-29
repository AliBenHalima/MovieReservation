import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  ChangeRole(id:string,role:number)
  {
    return this.httpClient.post<any>("http://localhost:3000/api/changeRole",{id:id,role:role});
  }
}
