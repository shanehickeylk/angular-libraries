import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unexpired'
})

export class UnexpiredPipe implements PipeTransform {

  transform(arr: any, length: number): any {
    if (!(arr instanceof Array)) { return arr; }

    return arr.filter(i => !i.__expired__);
  }

}
