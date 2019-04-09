import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})

export class Replace implements PipeTransform {

  transform(txt: string, find: string, replace: string): any {
    if (!txt) { return txt; }
    let result = txt;

    result = result.replace(new RegExp(find, 'i'), replace);

    return result;
  }

}
