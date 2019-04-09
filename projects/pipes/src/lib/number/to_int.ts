import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toInt'
})

export class ToIntPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) { return; }

    return parseInt(value, 10);
  }

}
