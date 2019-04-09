import { Pipe, PipeTransform } from '@angular/core';
import { PercentagePipe } from './percentage';

@Pipe({
  name: 'percentageOrNil'
})

export class PercentageOrNilPipe implements PipeTransform {

  transform(num: any, round?: number, correlatedValue?: number): any {
    round = typeof round === 'number' ? round : 1;

    if (isNaN(num) || num === null) {
      return '–';
    }

    const percentagePipe = new PercentagePipe();
    return percentagePipe.transform(num, round, correlatedValue);
  }

}
