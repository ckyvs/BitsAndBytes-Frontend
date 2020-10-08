import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus;
  errorStatusList:Map<number, String>;
  msg:string;
  loginAction:Observable<any>;
  username:string;
  password:string;

  constructor(
    private authService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn())
      this.router.navigate(['']);
    this.loginStatus=null;
    this.errorStatusList = new Map();
    this.errorStatusList.set(0, "Cant Connect to Server");
    this.errorStatusList.set(401, "Invalid Credentials");
  }

  loginError() {
    if(this.loginStatus == null)
      return false;
    return true;
  }

  onSubmit() {
    this.authService.jwtAuthenticate(this.username, this.password).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token);
        this.authService.setUser();
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error)
        this.loginStatus=this.errorStatusList.get(error.status);
      }
    );
    if(this.loginStatus != null) {
      this.username=''
      this.password=''
    }
  }

}
