import { TestBed } from '@angular/core/testing';

import { AdminAuthenServiceService } from './admin-authen-service.service';

describe('AdminAuthenServiceService', () => {
	let service: AdminAuthenServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminAuthenServiceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
