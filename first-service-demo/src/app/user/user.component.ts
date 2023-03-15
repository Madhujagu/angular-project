import { Component } from '@angular/core';
import { NatixisService } from '../natixis.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:any;
  empDetails:any;

  constructor(private userEmp:NatixisService)
  {
    this.user=[{
      "id" : 1,
      "name" : "mahesh",
      "email" : "mahi@gmail"
    },
  {
    
    "id" : 2,
    "name" : "raju",
    "email" : "raju@gmail"
  }];
  }
  ngOnInit(){
    this.empDetails=this.userEmp.getEmpData();
  }
}
