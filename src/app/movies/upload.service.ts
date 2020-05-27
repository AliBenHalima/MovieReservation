import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
@Injectable({
	providedIn: 'root'
})
export class UploadService {
	constructor(private HttpClient: HttpClient) {}

	upload(movie: FormData) {
		return this.HttpClient.post('http://localhost:3000/api/Movies', movie);
	}

	getMovies() {
		return this.HttpClient.get('http://localhost:3000/api/getMovies');
	}

	getMoviesByUser() {
		return this.HttpClient.get('http://localhost:3000/api/getMoviesByUser');
	}

	deleteMovie(id: any) {
		return this.HttpClient.delete('http://localhost:3000/api/deleteMovie/' + id);
	}

	updateMovie(movie: FormData) {
		return this.HttpClient.put('http://localhost:3000/api/updateMovie/', movie);
	}
}
