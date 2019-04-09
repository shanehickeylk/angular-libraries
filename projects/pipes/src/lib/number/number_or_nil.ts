import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOrNil'
})

export class NumberOrNilPipe implements PipeTransform {

  transform(num: any, displayNull?: string): any {
    displayNull = typeof displayNull === 'string' ? displayNull : '-';

    if (isNaN(num) || num === null) {
      return displayNull;
    }
    return num;
  }

}
