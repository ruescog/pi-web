import { TestBed } from '@angular/core/testing';

import { OdiseaService } from './odisea.service';

describe('OdiseaService', () => {
  let service: OdiseaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdiseaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
