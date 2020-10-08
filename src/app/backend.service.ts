import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Candidate } from 'src/Models/Candidate';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getFilteredData() {
    return this.http.get<Candidate[]>("http://localhost:8080/api/vacancies")
  }

  changeStatus(id, status) {
    return this.http.put(`http://localhost:8080/api/vacancies/${id}`, status)
  }

  getOneVacancy(id) {
    return this.http.get<Candidate>(`http://localhost:8080/api/vacancies/${id}`);
  }

  addVacancy(vacancy) {
    return this.http.post("http://localhost:8080/api/vacancies", vacancy);
  }
}
