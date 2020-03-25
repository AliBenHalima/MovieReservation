import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from './movie.model'
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private HttpClient: HttpClient) { }



  upload(name: string,
    cat: string,
    desc: string,
    file: string,
    duration: string,
    prodName: string,
    type: string) {

    const movie: Movie = { name: name, cat: cat, desc: desc, file: file, duration: duration, prodName: prodName, type: type };
    this.HttpClient.post('http://localhost:3000/api/Movies', movie)
      .subscribe((resFromBE) => {
        console.log(resFromBE);
      });
  }



}
