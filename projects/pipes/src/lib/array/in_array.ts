import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inArray'
})

export class InArrayPipe implements PipeTransform {

  transform(el: any, arr: any): any {
    if (!(arr instanceof Array)) {
      throw new Error('The argument passed is not an array.');
    }
    return arr.includes(el);
  }

}
