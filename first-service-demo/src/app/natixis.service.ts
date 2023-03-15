import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NatixisService {

  getEmpData(){
    return [{
      "EmpId":101,
      "Empname":"ramu",
      "Empsalary":89000
    },
  {
    
    "EmpId":102,
    "Empname":"Raju",
    "Empsalary":79000
  },
{
  "EmpId":103,
  "Empname":"Suraj",
  "Empsalary":67000
}];
  }
  constructor() { }
}
