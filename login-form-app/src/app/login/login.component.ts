import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginResponse:any;
  userName:string="";
  userPassword:string="";
  errorMessage:string="";

  constructor(private router:Router,private http:HttpClient)
  {
    
  }

  submit(){
    let userData=this.http.get("http://localhost:8080/login?username="+this.userName+"&password="+this.userPassword);

    
    userData.subscribe((res)=>{
    console.log(res);
    this.loginResponse=JSON.stringify(res);

    if(this.loginResponse=="true")
    {
      this.router.navigateByUrl("/home");
    }
    else{
        this.errorMessage =" Invalid user Details";
        this.userName = "";
        this.userPassword = "";
    }
  
  }
  );
}
}
