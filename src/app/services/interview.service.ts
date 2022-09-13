import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interview } from '../domain/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private baseURL : string = "http://localhost:8080/interviewapi/interview";
  constructor(private httpClient: HttpClient) { }

  scheduleInterview(interview : Interview): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseURL+"/add",interview);
  }
}
