import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService:AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['vacancies']);
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
