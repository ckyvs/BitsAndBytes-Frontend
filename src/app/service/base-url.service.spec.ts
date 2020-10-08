import { TestBed } from '@angular/core/testing';

import { BaseURLService } from './base-url.service';

describe('BaseURLService', () => {
  let service: BaseURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
