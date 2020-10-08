import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
    constructor(
      private router:Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler){
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.router.navigate(['logout'])
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}