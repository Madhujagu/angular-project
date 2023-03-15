import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentfee',
  templateUrl: './studentfee.component.html',
  styleUrls: ['./studentfee.component.css']
})
export class StudentfeeComponent {
  
  userData:any;
  searchFee:string="";

  
  constructor(private http:HttpClient)
  {

    // let clientData=http.get("http://localhost:8080/byName");

    // clientData.subscribe((natixisdata)=>{
    //   console.log(natixisdata);
    //   this.userData=natixisdata;
    // });
 
  }
  
  postFee()
  {
    
    console.log("getting the result......"+this.searchFee);
    let clientData =  this.http.get("http://localhost:8080/searchByFee",{params:{"fee":this.searchFee}});

    clientData.subscribe((natixisdata)=>{
      console.log(natixisdata);
      this.userData=natixisdata;
    });

  }

}
