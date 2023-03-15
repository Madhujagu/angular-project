import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementsalary'
})
export class IncrementsalaryPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value)

    let currentsalary=value;
    {
      if(currentsalary<50000)
      {
        currentsalary=currentsalary+5000;
      }
    }
    return currentsalary;
  }

}
