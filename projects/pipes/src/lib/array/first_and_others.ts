import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstAndOthers'
})

export class FirstAndOthersPipe implements PipeTransform {

  transform(arr: any): any {
    if (!(arr instanceof Array)) { return arr; }

    const arrLength = arr.length;

    if (arrLength === 0) {
      return '';
    } else if (arrLength === 1) {
      return arr[0];
    } else if (arrLength === 2) {
      return arr[0] + ' and ' + arr[1];
    } else {
      return arr[0] + ' and ' + (arrLength - 1) + ' others';
    }
  }

}
