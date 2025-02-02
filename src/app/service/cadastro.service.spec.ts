import { TestBed } from '@angular/core/testing';

import { cadastroService } from './cadastros.service';

describe('LoginserviceService', () => {
  let service: cadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
