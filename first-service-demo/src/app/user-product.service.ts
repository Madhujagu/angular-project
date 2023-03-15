import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProductService {

  getuserdata(){
    return [{
      "productId":101,
      "productname":"vivo",
      "productprice":789000
    },
  {
    
    "productId":102,
    "productname":"Rolex",
    "productprice":89000
  },
{
  "productId":103,
  "productname":"redmi",
  "productprice":18000
}];
  }
  constructor() { }
}
