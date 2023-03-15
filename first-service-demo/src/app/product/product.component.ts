import { Component } from '@angular/core';
import { NatixisService } from '../natixis.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  empData:any;

  constructor(natiservice:NatixisService)
  {
    this.empData=natiservice.getEmpData();
  }

}
