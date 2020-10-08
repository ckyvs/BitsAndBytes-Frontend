import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/Models/Candidate';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.css']
})
export class CreateVacancyComponent implements OnInit {

  vacancy:Candidate;
  constructor(
    private backendService:BackendService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.vacancy = new Candidate;
    this.vacancy.id = -1;
  }
  addVacancy() {
    this.backendService.addVacancy(this.vacancy).subscribe(
      res => {
        this.router.navigate(['vacancy']);
      }
    )
  }

}
