import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(text: any, length: any, end: any): any {
    if (!text) { return ''; }
    if (isNaN(length)) { length = 10; }
    if (end === void 0) { end = '...'; }
    if (text.length <= length || text.length - end.length <= length) {
      return text;
    } else {
      return String(text).substring(0, length - end.length) + end;
    }
  }

}
