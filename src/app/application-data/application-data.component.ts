import { Component } from '@angular/core';
import { AppliedLeaveService } from '../applied-leave.service';

@Component({
  selector: 'application-data',
  templateUrl: './application-data.component.html',
  styleUrls: ['./application-data.component.css']
})
export class ApplicationDataComponent {

  employees:any;
  constructor(private employeeData: AppliedLeaveService)
  {
    this.employeeData.employees().
    subscribe((data)=>{
      console.log("data"+JSON.stringify(data));
      this.employees = data;
    })
  }

}
