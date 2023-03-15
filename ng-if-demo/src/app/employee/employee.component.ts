import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee:any;

  constructor()
  {
    this.employee=[{
      Empid : 1,
      "Empname" : "madhu",
      "email" : "madhu@gmail"
    },
  {
    
    "Empid" : 2,
    "Empname" : "manu",
    "email" : "manu@gmail"
  },
{
  
  "Empid" : 3,
  "Empname" : "mahesh",
  "email" : "mahesh@gmail"
}];
  }
}
