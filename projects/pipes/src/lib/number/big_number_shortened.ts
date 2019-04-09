import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNumberShortened'
})

export class BigNumberShortenedPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof (value) === 'undefined') {
      return value;
    } else if (isNaN(value)) {
      return '-';
    } else if (Math.abs(value) >= 1000000000) {
      return (value / 1000000000).toFixed(2) + 'B';
    } else if (Math.abs(value) >= 10000) {
      return (value / 1000000).toFixed(0) + 'M';
    }
  }

}
