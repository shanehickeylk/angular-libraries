import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapArrayElements'
})

export class WrapArrayElementsPipe implements PipeTransform {

  transform(arr: any, tagName: string): any {
    if (arr instanceof Array) {
      return arr.map(el => {
        return this.wrapElement(el, tagName);
      });
    } else {
      return this.wrapElement(arr, tagName);
    }
  }

  wrapElement(el: any, tagName) {
    return  `<${tagName}>${el}</${tagName}>`;
  }
}
