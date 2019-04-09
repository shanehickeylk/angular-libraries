import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHTML'
})

export class ToHTML implements PipeTransform {

  transform(txt: string): any {
    if (!txt) { return txt; }

    let result = txt;

    result = result.replace(/<script.*script>/g, '');
    result = result.replace(/<iframe.*iframe>/g, '');
    result = result.replace(/<img.*\/>/g, '');
    result = result.replace(/<img.*img>/g, '');
    result = result.replace(/<style.*style>/g, '');
    result = result.replace(/\r/g, '');
    result = result.replace(/\n/g, '<br/>');

    return result;
  }

}
