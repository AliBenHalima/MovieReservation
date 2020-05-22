import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from './upload.service';

import * as $ from 'jquery';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: [ './movies.component.css' ]
})
export class MoviesComponent implements OnInit {
	movies: any;
	image = null;
	id: string;

	constructor(public UploadService: UploadService) {}

	ngOnInit(): void {
		this.UploadService.getMoviesByUser().subscribe((movies) => {
			this.movies = movies;
			console.log(movies);
		});
	}

	show() {
		$('button.upload').hide('slow');
		$('div.upload').show('slow');
		$('div.update').hide('slow');
	}

	hide() {
		$('button.upload').show('slow');
		$('div.upload').hide('slow');
	}

	hide_update() {
		$('div.update').hide('slow');
	}

	onImgSelected(event: Event) {
		console.log('event trigged');
		console.log(event);
		this.image = (event.target as HTMLInputElement).files[0];
	}

	upload(form: NgForm) {
		this.hide();
		const data = new FormData();
		data.append('name', form.value.name);
		data.append('cat', form.value.cat);
		data.append('desc', form.value.desc);
		data.append('duration', form.value.duration);
		data.append('prodName', form.value.prodName);
		data.append('type', form.value.type);
		data.append('file', this.image, this.image.name);
		this.UploadService.upload(data).subscribe((res) => {
			form.value._id = (<any>res).id;
			form.value.file = (<any>res).image;
			alert(form.value.file);
			this.movies.push(form.value);
		});
	}

	update(form: NgForm) {
		this.hide_update();
		const data = new FormData();
		console.log(form.value);
		data.append('id', this.id);
		data.append('name', form.value.name);
		data.append('cat', form.value.cat);
		data.append('desc', form.value.desc);
		data.append('duration', form.value.duration);
		data.append('prodName', form.value.prodName);
		data.append('type', form.value.type);
		if (this.image) data.append('file', this.image, this.image.name);
		this.UploadService.updateMovie(data);
	}
}
