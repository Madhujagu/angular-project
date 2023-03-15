import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  stud:Student={
    id:101,
    name:"madhu",
    fee:35000,
    books:"Angular"
  };
}
