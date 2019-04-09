import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toParagraphs'
})

export class ToParagraphsPipe implements PipeTransform {

  transform(txt: string): any {
    if (!txt) { return txt; }

    let result = txt;

    result = result.replace(/(\r?\n){2}/g, '</p><p>');

    return `<p>${result}</p>`;
  }

}
