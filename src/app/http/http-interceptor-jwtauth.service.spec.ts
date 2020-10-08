import { TestBed } from '@angular/core/testing';

import { HttpInterceptorJWTAuthService } from './http-interceptor-jwtauth.service';

describe('HttpInterceptorJWTAuthService', () => {
  let service: HttpInterceptorJWTAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorJWTAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
