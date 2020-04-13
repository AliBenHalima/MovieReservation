import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
@Injectable({
	providedIn: 'root'
})
export class UploadService {
	constructor(private HttpClient: HttpClient) {}

	upload(movie: FormData) {
		this.HttpClient.post('http://localhost:3000/api/Movies', movie).subscribe((resFromBE) => {
			console.log(resFromBE);
		});
	}

	getMovies() {
		return this.HttpClient.get('http://localhost:3000/api/getMovies');
	}

	getMoviesByUser() {
		return this.HttpClient.get('http://localhost:3000/api/getMoviesByUser');
	}
}
