import { TestBed } from '@angular/core/testing';

import { MLservicesService } from './mlservices.service';

describe('MLservicesService', () => {
  let service: MLservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
