import { ApplicantDetails } from "./applicant-details";
import { EmployeeDetails } from "./EmployeeDetails";

export class Interview {
    interviewNo: number = 0;
    employeeDetails: EmployeeDetails = new EmployeeDetails();
    applicantDetails: ApplicantDetails = new ApplicantDetails();
    status: string = "";
    technicalRound1: string = "";
    technicalRound2: string = "";
    hrRound3: string = "";
    feedback: string = "";
}