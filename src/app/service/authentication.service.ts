import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../entities/employee';
import { response } from '../entities/response';
import { BaseURLService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  emp:employee;
  error;
  constructor(private http:HttpClient,
    private router:Router,
    private baseUrl:BaseURLService
    )
    {

    }
  jwtAuthenticate(username, password) {
    let user = {
      'username':username,
      'password':password
    }
    return this.http.post<response>(this.baseUrl.BASE_URL+"/authenticate", user)
  }

  setUser() {
    sessionStorage.setItem('user', 'admin');
  }

  isLoggedIn() {
    if(sessionStorage.length > 0) {
      return true;
    }
    return false;
  }
}
