import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { StudentfeeComponent } from './studentfee/studentfee.component';
import { StudentmarksComponent } from './studentmarks/studentmarks.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactusComponent},
  {path:"marks",component:StudentmarksComponent},
  {path:"fee",component:StudentfeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
