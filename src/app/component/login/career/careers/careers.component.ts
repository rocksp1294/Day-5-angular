import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant-details';
import { DocumentsDetails } from 'src/app/domain/document-details';
import { JobDescription } from 'src/app/domain/JobDescription';
import { ApplicantsService } from 'src/app/services/applicants.service';
import { CareerService } from 'src/app/services/career.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  submitted : boolean = false;
  documentDetails : DocumentsDetails = new DocumentsDetails();
  applicantDetails:ApplicantDetails = new ApplicantDetails();
  result : boolean = false;
  jobdescriptionCareer : JobDescription[] =[];
  jobdescription : JobDescription=new JobDescription();
  constructor(private router: Router,
    private careerService: CareerService,
    private jobdescriptionService: JobdescriptionService,
    private applicantService : ApplicantsService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.showCareer();
   this.candiadateApplication(this.applicantDetails);
  }

  showCareer(){
    console.log("In showCareer");
    console.log(this.jobdescription);
    this.jobdescriptionService.showCareer().subscribe
    (
      data=>{
        this.jobdescriptionCareer=data;
        console.log(this.jobdescriptionCareer);
        this.activatedRoute.snapshot.params['careers'];
      }
    );
  }
  candiadateApplication(applicantDetails: ApplicantDetails){
    console.log("in candiadateApplication()");
    // this.applicantDetails.jobDescription = this.jobdescription;
    // this.applicantDetails.documentsDetails= this.documentDetails;

    this.applicantService.candiadateApplication(applicantDetails).subscribe(
      data=>{
        this.result=data;
        console.log(this.result);
        this.submitted=true;
      }
    );
    
  }
  showForm(jobId : string){
    this.submitted=true;
  }


}
