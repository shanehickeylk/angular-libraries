import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {

  transform(txt: string, replacement: any, delimeter?: string): any {
    delimeter = typeof delimeter === 'string' ? delimeter : ';';

    if (!replacement) { return txt; }

    let replacementRegexp;

    if (toString.call(replacement) === '[object Array]') {
      replacementRegexp = new RegExp('^(\\s*(' + (replacement.join('|')) + ')\\s*)$', 'gi');

    } else {
      replacementRegexp = new RegExp('(' + (replacement) + ')', 'gi');
    }

    const output = [];

    txt.split(delimeter).forEach((item) => {
      output.push(item.replace(replacementRegexp, '<strong>$1</strong>'));
    });

    return output.join(delimeter);
  }

}
