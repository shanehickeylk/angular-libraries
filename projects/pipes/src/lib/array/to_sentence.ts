import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSentence'
})

export class ToSentencePipe implements PipeTransform {

  transform(arr: any, conjunction?: string): any {
    conjunction = typeof conjunction === 'string' ? conjunction : 'and';

    if (!(arr instanceof Array)) { return arr; }
    const arrLength = arr.length;
    if (arrLength === 0) {
      return '';
    } else if (arrLength === 1) {
      return arr[0];
    } else if (arrLength === 2) {
      return arr[0] + ' ' + conjunction + ' ' + arr[1];
    } else {
      return arr.slice(0, arrLength - 1).join(', ') + ' ' + conjunction + ' ' + arr[arrLength - 1];
    }
  }

}
