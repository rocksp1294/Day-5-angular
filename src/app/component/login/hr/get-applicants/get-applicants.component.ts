import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant-details';
import { DocumentsDetails } from 'src/app/domain/document-details';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { Interview } from 'src/app/domain/interview';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { ApplicantsService } from 'src/app/services/applicants.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { InterviewService } from 'src/app/services/interview.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';

@Component({
  selector: 'app-get-applicants',
  templateUrl: './get-applicants.component.html',
  styleUrls: ['./get-applicants.component.css']
})
export class GetApplicantsComponent implements OnInit {
  allemployeedetails : EmployeeDetails[] =[];
  employeedetails: EmployeeDetails = new EmployeeDetails();
  logindetails : LoginDetails = new LoginDetails();
  jobdescription : JobDescription=  new JobDescription();
  alljobdescription :JobDescription[] = [];
  applicantDetails : ApplicantDetails[] = [];
  applicantdetails : ApplicantDetails = new ApplicantDetails();
  documentDetails : DocumentsDetails = new DocumentsDetails();
  interview : Interview = new Interview();
  result : boolean= false;
  constructor(private jobdescriptionService : JobdescriptionService,
    private router: Router,
    private employeeService : EmployeeService,
    private applicantService : ApplicantsService,
    private activatedRoute: ActivatedRoute,
    private interviewService : InterviewService
    ) { }
  ngOnInit(): void {
    this.jobdescription.jobId = this.activatedRoute.snapshot.params['jobId']; 
    this.getApplicants(this.jobdescription.jobId);
    
  }
  getApplicants(jobId : string){
    this.applicantService.getApplicants(this.jobdescription.jobId ).subscribe(
      data=>
      {
        console.log("in get applics");
        
        this.applicantDetails = data;
        console.log(this.applicantDetails);
    
      }
    );
  }

  scheduleInterview(interview : Interview){
    this.interviewService.scheduleInterview(interview).subscribe(
      data=>{
        console.log("in scheduleInterview()");
        this.result=data;
        console.log(this.result);
        this.activatedRoute.snapshot.params['applicantId']
        this.router.navigate(['app-schedule-interview']);
      }
    );
  }

}
