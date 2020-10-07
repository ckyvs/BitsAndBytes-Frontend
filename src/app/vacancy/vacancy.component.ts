import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/Models/Candidate';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  person: Candidate;

  constructor(private service: BackendService) { }

  ngOnInit(): void {
  }

  getFiltered() {
    this.service.getFilteredData().subscribe(data => {
      this.person = data;
    })
  }

}
