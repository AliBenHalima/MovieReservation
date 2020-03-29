import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from './upload.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  image = null;

  constructor(public UploadService: UploadService) { }

  ngOnInit(): void {
  }

  show() {
    $("button.upload").hide("slow");
    $("div.upload").show("slow");
  }


  hide() {
    $("button.upload").show("slow");
    $("div.upload").hide("slow");
  }


  onImgSelected(event:Event)
  {
    console.log("event trigged");
    this.image = (event.target as HTMLInputElement).files[0];
  }


  upload(form: NgForm) {
    console.log(form);
    console.log(form.value);

    const data = new FormData();
    data.append("name",form.value.name);
    data.append("cat",form.value.cat);
    data.append("desc",form.value.desc);
    data.append("file",this.image,this.image.name);
    data.append("duration",form.value.duration);
    data.append("prodName",form.value.prodName);
    data.append("type",form.value.type);
    this.UploadService.upload(data);

    // this.UploadService.upload(form.value.name, form.value.cat, form.value.desc, form.value.file, form.value.duration, form.value.prodName, form.value.type);
    console.log("ok");


  }





}
