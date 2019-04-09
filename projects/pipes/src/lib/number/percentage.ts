import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'percentage'
})

export class PercentagePipe implements PipeTransform {

  transform(num: any, round?: number, correlatedValue?: number): any {
    round = typeof round === 'number' ? round : 1;
    correlatedValue = typeof correlatedValue === 'number' ? correlatedValue : 0;

    if (isNaN(num) || num === null) {
      return 0.0.toFixed(round) + '%';
    }

    const minimumNum = (1 / Math.pow(10, round));

    if ((0.0 < num && num < minimumNum) || (num === 0.0 && correlatedValue > 0.0)) {
      return '<' + minimumNum.toFixed(round) + '%';
    } else {
      return num.toFixed(round) + '%';
    }
  }

}
