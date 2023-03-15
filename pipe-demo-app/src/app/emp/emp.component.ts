import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  empData:any;
  
  constructor(private http:HttpClient)
  {

    let clientData=http.get("http://localhost:8080/all");

    clientData.subscribe((natixisdata)=>{
      console.log(natixisdata);
      this.empData=natixisdata;
    });
 
  }
  

}
