import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentmarks',
  templateUrl: './studentmarks.component.html',
  styleUrls: ['./studentmarks.component.css']
})
export class StudentmarksComponent {

  userData:any;
  searchValue:string="";

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
}
