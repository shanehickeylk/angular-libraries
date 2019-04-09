import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinWith'
})

export class JoinWithPipe implements PipeTransform {

  transform(arr: any, separator: string): any {
    separator = typeof separator === 'string' ? separator : ',';
    if (!(arr instanceof Array)) { return arr; }
    return arr.join(separator);
  }

}
