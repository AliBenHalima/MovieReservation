import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../sign-up/auth.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.css' ],
	providers: [ MessageService ]
})
export class MainComponent implements OnInit {
	movies;
	constructor(
		private apiService: UserApiService,
		private authService: AuthService,
		private messageService: MessageService
	) {}

	addSingle() {
		this.messageService.add({
			severity: 'success',
			summary: 'Connected',
			detail: 'Hi , ' + this.authService.get_userName() + " you're Welcome"
		});
	}

	ngOnInit(): void {
		console.log(this.authService.connected);
		if (this.authService.connected) {
			console.log('enter');

			setTimeout(() => {
				this.addSingle();
			}, 700);
		}

		this.apiService.getMovies().subscribe((res: any) => {
			console.log(res);
			this.movies = res.data;
			console.log(this.movies);
		});
	}
}
