import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDescription } from 'src/app/domain/JobDescription';
import { CareerService } from 'src/app/services/career.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobdescriptionCareer : JobDescription[] =[];
  jobdescription : JobDescription=new JobDescription();
  constructor(private router: Router,
    private careerService: CareerService,
    private jobdescriptionService: JobdescriptionService,
    ) { }
  ngOnInit(): void {
    
  }
  
}
