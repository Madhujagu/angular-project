import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { AgePipe } from './age.pipe';
import {HttpClientModule} from '@angular/common/http';
import { IncrementsalaryPipe } from './incrementsalary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    AgePipe,
    IncrementsalaryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
