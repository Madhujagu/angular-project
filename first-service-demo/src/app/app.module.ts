import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { UserProductService } from './user-product.service';
import { NatixisService } from './natixis.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserProductService,NatixisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
