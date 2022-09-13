import { DocumentsDetails } from "./document-details";
import { JobDescription } from "./JobDescription";

export class ApplicantDetails{
    applicantId : string="";
	applicantFirstName : string="";
	applicantLastName : string="";
	documentsDetails :DocumentsDetails = new DocumentsDetails();
	jobDescription : JobDescription = new JobDescription ();
	highestQualification : string = "";
	technicalskills1 : string = "";
	technicalskills2 : string = "";
	technicalskills3 : string ="";
	gender : string ="";
	contactNo : string="";
	dateOfBirth : Date= new Date();
	passout : Date= new Date();
	status : string = "";
}