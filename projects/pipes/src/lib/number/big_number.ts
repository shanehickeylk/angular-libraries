import { Pipe, PipeTransform } from '@angular/core';

const NUMERICAL_UNITS = {
  billions: { abbr: 'B', value: 1000000000 },
  millions: { abbr: 'M', value: 1000000 }
};

@Pipe({
  name: 'bigNumber'
})

export class BigNumberPipe implements PipeTransform {

  transform(value: any) : any {
    if (isNaN(value)) { return  '-'; }

    const absValue = Math.abs(value);

    let bigUnit;

    if (absValue >= 999999999) {
      bigUnit = NUMERICAL_UNITS.billions;
    } else if (absValue >= 99999) {
      bigUnit = NUMERICAL_UNITS.millions;
    } else {
      return parseInt(value, 10);
    }

    const rounding = (absValue / bigUnit.value >= 100) ? 1 : 2 ;
    return (value / bigUnit.value).toFixed(rounding) + bigUnit.abbr;
  }

}
