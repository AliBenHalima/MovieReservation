import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from './upload.service';
import { Movie } from 'src/app/movies/movie.model';
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
	x: any;

	constructor(public UploadService: UploadService) {}

	ngOnInit(): void {
		this.x = this.UploadService.getMoviesByUser().subscribe((movies) => {
			this.movies = movies;
		});
		console.log(this.x);
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
		data.append('price', form.value.price);
		data.append('trailer', form.value.trailer);
		this.UploadService.upload(data).subscribe((res) => {
			form.value._id = (<any>res).id;
			form.value.file = (<any>res).image;
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
		data.append('price', form.value.price);
		data.append('trailer', form.value.trailer);
		if (this.image) data.append('file', this.image, this.image.name);
		this.UploadService.updateMovie(data).subscribe((movie) => {
			let i = this.movies.findIndex((m) => {
				return m._id == (<any>movie)._id;
			});
			this.movies[i] = movie;
			console.log(this.movies[i]);
			// $('#name').val((<Movie>movie).name);
			// $('#duration').val((<Movie>movie).duration);
			// $('#prodName').val((<Movie>movie).prodName);
			// $('#desc').val((<Movie>movie).desc);
			// $('#category').val((<Movie>movie).category);
			// $('#type').val((<Movie>movie).type);
			// $('#price').val((<Movie>movie).price);
			// $('#trailer').val((<Movie>movie).trailer);
			// console.log(movie);
		});
	}
}
