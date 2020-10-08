import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/Models/Candidate';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-save-vacancy',
  templateUrl: './save-vacancy.component.html',
  styleUrls: ['./save-vacancy.component.css']
})
export class SaveVacancyComponent implements OnInit {

  id:number;
  vacancy:Candidate;
  status:string;
  constructor(
    private route:ActivatedRoute,
    private backendService:BackendService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.backendService.getOneVacancy(this.id).subscribe(
      res => {
        this.status = res.status;
      }
    )
  }

  save() {
    this.backendService.changeStatus(this.id, this.status).subscribe(
      (res) => {
        this.router.navigate(['vacancies']);
      }
    )
  }

}
