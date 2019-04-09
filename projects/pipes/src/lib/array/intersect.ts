import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intersect'
})

export class IntersectPipe implements PipeTransform {

  transform(arr: any, reference: any): any {
    if (arr instanceof Array) {
      return arr.filter(el => {
        return this.elementIsMatched(el, reference);
      });
    } else {
      return this.elementIsMatched(arr, reference) ? arr : null;
    }
  }

  elementIsMatched(el: any, reference: any) {
    if (reference instanceof Array) {
      return reference.indexOf(el) > -1 ;
    } else {
      return el === reference;
    }
  }

}
