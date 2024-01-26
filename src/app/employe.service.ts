import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseURL = "http://localhost:8081/api/v1/employes";

  constructor(private httpClient : HttpClient) { }

  getEmployeList() : Observable<Employe[]>
  {
    return this.httpClient.get<Employe[]>(this.baseURL);
  }

  saveEmploye(employe: Employe) : Observable<Object>{
    return this.httpClient.post(this.baseURL, employe);
  }

  getEmployeById(id: number) : Observable<Employe>
  {
    return this.httpClient.get<Employe>('${this.baseURL}/${id}');
  }
}
