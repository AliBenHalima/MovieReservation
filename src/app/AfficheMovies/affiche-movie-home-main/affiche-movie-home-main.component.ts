import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';
import { UploadService } from 'src/app/movies/upload.service';
// import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
	selector: 'app-affiche-movie-home-main',
	templateUrl: './affiche-movie-home-main.component.html',
	styleUrls: [ './affiche-movie-home-main.component.css' ]
})
export class AfficheMovieHomeMainComponent implements OnInit {
	@Input() movie: Movie;
	@Input() del: Movie;
	constructor(public uploadService: UploadService) {}

	ngOnInit(): void {}

	fun_del(x: any) {
		this.uploadService.deleteMovie(x).subscribe();
		$(`#${x}`).fadeOut(400);
	}
}
