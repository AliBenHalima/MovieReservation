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



  upload(form: NgForm) {
    console.log(form);
    console.log(form.value);
    this.UploadService.upload(form.value.name, form.value.cat, form.value.desc, form.value.file, form.value.duration, form.value.prodName, form.value.type);
    console.log("ok");


  }





}
