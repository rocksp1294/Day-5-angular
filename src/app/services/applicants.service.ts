import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicantDetails } from '../domain/applicant-details';
import { JobdescriptionService } from './jobdescription.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {


  private baseURL: string = "http://localhost:8080/applicantdetailsapi/applicantdetails"
  constructor(private httpClient: HttpClient, private jobdescriptionService: JobdescriptionService) { }

  candiadateApplication(applicantDetails: ApplicantDetails): Observable<boolean> {
    console.log("in candiadateApplicationService()");
    console.log(this.candiadateApplication);
    return this.httpClient.post<boolean>(this.baseURL, applicantDetails);
  }

  getApplicants(jobId: string): Observable<ApplicantDetails[]> {
    console.log("in Get ApplicantService");
    console.log(this.getApplicants);
    return this.httpClient.get<ApplicantDetails[]>(this.baseURL + "/hr/" + jobId);
  }

}

