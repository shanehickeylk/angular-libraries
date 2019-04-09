import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveOrNegative'
})

export class PositiveOrNegativePipe implements PipeTransform {

  transform(num: any): any {
    if (typeof (num) === 'undefined') { return num; }

    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }

}
