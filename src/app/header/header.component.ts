import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.authService.isLoggedIn();
  }

}
