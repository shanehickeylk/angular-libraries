import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendSign'
})

export class AppendSignPipe implements PipeTransform {

  transform(value: any) : any {
    if (typeof (value) === 'undefined') { return value; }

    return parseFloat(value) > 0 ? `+${value}` : value;
  }

}
