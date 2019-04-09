import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightArrayElement'
})

export class HighlightArrayElementPipe implements PipeTransform {

  transform(arr: any, reference: any): any {
    if (arr instanceof Array) {
      return arr.map(el => {
          return this.highlightElement(el, reference);
      });
    } else {
      return this.highlightElement(arr, reference);
    }
  }

  highlightElement(el: any, reference) {
    let match: boolean;
    if (reference instanceof Array) {
      match = (reference.indexOf(el) > -1 );
    } else {
      match = (el === reference);
    }
    return  match ? `<strong>${el}</strong>` : el;
  }

}
