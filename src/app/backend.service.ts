import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Candidate } from 'src/Models/Candidate';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getFilteredData() {
    return this.http.get<Candidate>("http://localhost:8080")
  }
}
