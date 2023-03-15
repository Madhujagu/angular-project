import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  userData:any;
  searchValue:string="";
  searchFee:string="";

  constructor(private http:HttpClient)
  {

    // let clientData=http.get("http://localhost:8080/byName");

    // clientData.subscribe((natixisdata)=>{
    //   console.log(natixisdata);
    //   this.userData=natixisdata;
    // });
 
  }
  
  postData(){
    console.log("getting the result......"+this.searchValue);
    let clientData =  this.http.get("http://localhost:8080/search",{params:{"marks":this.searchValue}});

    clientData.subscribe((natixisdata)=>{
      console.log(natixisdata);
      this.userData=natixisdata;
    });
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
