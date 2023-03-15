import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Product:any;
  constructor(){
    this.Product=[{
      id:1,
      name:"Redmi Note 13",
      brand:"XIAOMI",
      price:35000
    },
  {
    id:2,
      name:"onePlus Note 9",
      brand:"ONEPLUS",
      price:35000
   
  },{
    id:3,
      name:"Iphone 13 pro MAX",
      brand:"XIAOMI",
      price:178000
   
  }];
  }
}
