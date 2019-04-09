import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})

export class SlicePipe implements PipeTransform {
  transform(arr: any, length: number): any {
    if (!(arr instanceof Array)) { return arr; }
    return arr.slice(0, length);
  }
}
