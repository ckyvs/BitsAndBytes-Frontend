import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJWTAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken;
    if (sessionStorage.getItem('token')) {
      jwtToken = 'Bearer ' + sessionStorage.getItem('token')
      //console.log(jwtToken)
      let headers = new HttpHeaders({
        Authorization: jwtToken
      })
      request = request.clone(
        {
          headers
        }
      )
    }
    return next.handle(request);
  }
}
