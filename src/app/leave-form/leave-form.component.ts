import Swal from 'sweetalert2';
import { Component} from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from '../employees';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
// import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css'],
})
export class LeaveFormComponent {
  leaveOptions = ['Casual Leave', 'Earned Leave', 'Sick Leave'];
  reporters = ['Avinashi Sharma', 'Pradeep Kumar', 'Km Saloni'];
  pageTitle: string = 'Leave-Application Form';

  dashUrl = 'http://localhost:4200/dashboard';
  _url = 'http://localhost:8000/leave-applications';
  showContainer = true;
  hideBtn = true;
  showFileField = true;
  imageFlag = true;
  dataFlag = false;
  buttonFlag = true;
  public recieved: string = 'Click here to Submit Your data !';
  componentUrl = 'application-data';

  selectedName: string = '';
  selectedLeaveType: string = '';
  selectedFDate: Date | null = null;
  selectedTDate: Date | null = null;
  selectedTeam: string = '';
  selectedFile: string = '';
  selectedReporter: string = '';

  constructor(
    private _http: HttpClient,
    private router: Router,
    private datePipe: DatePipe,
  ) {}


  @HostListener('window:beforeunload') goToPage() {
    window.history.replaceState({}, 'Home', '/');
  }
  redirectToHomePage() {
    if(window.location.href == this.dashUrl)
    {
      
      window.history.replaceState({}, 'Home', '/');
      location.reload();      

    }
    
    // window.onbeforeunload = function() {
    //   if(window.location.href == this.dashUrl) {
    //     window.history.replaceState({}, 'Home', '/');
    //   }
    // };

    

  }

  redirectToDashboard() {
    this.pageTitle = `KPI's Data`
    this.showContainer = false;
    this.hideBtn = false;
    this.router.navigate(['/dashboard']);
  }
  


getMinDate(): string {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return today.toISOString().split("T")[0];
}

getMaxDate(): string {
  const maxDate = new Date("2027-12-31");
  return maxDate.toISOString().split("T")[0];
}


  convertDateToString(date: Date | null): string {
    return date ? this.datePipe.transform(date, 'yyyy-MM-dd') || '' : '';
  }

  formList:any[] = []
  addFormData() {
    const leaveFrom = this.convertDateToString(this.selectedFDate);
    const leaveTo = this.convertDateToString(this.selectedTDate);

   const employeeModel = new Employees(this.selectedName, this.selectedLeaveType, leaveFrom,
   leaveTo, this.selectedTeam,this.selectedFile, this.selectedReporter);


    const newEntry = {
      Name: this.selectedName,
      LeaveType: this.selectedLeaveType,
      LeaveFrom: this.convertDateToString(this.selectedFDate),
      LeaveTo: this.convertDateToString(this.selectedTDate),
      Team: this.selectedTeam,
      File: this.selectedFile,
      Reporter: this.selectedReporter,
    };

    this.formList.push(newEntry);
    this.buttonFlag = false;
  }




  onSubmit(data: any) {
    this.addFormData();
    console.log('name:', this.selectedName);
    console.log('leaveType:', this.selectedLeaveType);
    console.log('From Date:', this.selectedFDate);
    console.log('To Date', this.selectedTDate);
    console.log('team:', this.selectedTeam);
    console.log('file:', this.selectedFile);
    console.log('reporter:', this.selectedReporter);

    console.log('Hello, your form is ready.....');
    this.imageFlag = false;
    this.dataFlag = true;
  }

  uri: string= "http://localhost:8094/application-data";
  urii: string= "http://localhost:4200/application-data";
  uri1:string="http://localhost:4200/saved-leave-applications";



  clearPage()
  {
    if(window.location.href == this.uri || window.location.href == this.urii)
    {

      window.history.go(-1);
      setTimeout(() => {
        location.reload();
        
      }, 1000);
    }
    if(window.location.href == "http://localhost:8094/" || window.location.href == "http://localhost:4200/")
    {
      location.reload();
    }
  }

  postData(data: any) {
    console.log(data, 'pre submit data....');
    const headers = {
      'Content-Type': 'application/json',
    };

    this._http.post<any>(this._url, data, { headers }).subscribe({
      next: (data) => {
        console.log('success!', data);
      },
      error: (error) => console.error('Error!', error),
    });
  }


  changeInnerHtml() {
    this.recieved = 'Confirm !';
  }

  resetInnerHtml() {
    this.recieved = 'Click here to Submit Your data !';
  }


  sendData() {
    alert('Okay fine, Submitting your data...... !');
    this.postData({
      Name: this.selectedName,
      LeaveType: this.selectedLeaveType,
      LeaveFrom: this.convertDateToString(this.selectedFDate),
      LeaveTo: this.convertDateToString(this.selectedTDate),
      Team: this.selectedTeam,
      File: this.selectedFile,
      Reporter: this.selectedReporter,
    });
  }

  navigateToComponent(): void {
    this.sendData();
    this.router.navigateByUrl(this.componentUrl);
    const element = document.documentElement;
    element.scrollIntoView({ behavior: 'auto', block: 'end' });
  }
}



















