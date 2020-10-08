import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/Models/Candidate';
import { BackendService } from '../backend.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  person: Candidate[];

  constructor(
    private service: BackendService,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn())
      this.router.navigate(['']);
    this.getFiltered();
  }

  getFiltered() {
    this.service.getFilteredData().subscribe(data => {
      console.log(data);
      this.person = data;
    })
  }

}
