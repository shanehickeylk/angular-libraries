import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'any'
})

export class AnyPipe implements PipeTransform {

  transform(array: Array<any> | Set<any>): boolean {
    if (array) {
      if (array instanceof Array) {
        if (array.length > 0) {
          return true;
        } else {
          return false;
        }
      } else if (array instanceof Set) {
        if (array.size > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return !!array;
      }
    } else {
      return false;
    }
  }

}
