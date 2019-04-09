import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisWord'
})

export class EllipsisWordPipe implements PipeTransform {

  transform(txt: string, maxChars: number) {
    if (!txt) { return ''; }
    if (!maxChars) { maxChars = 15; }

    const words = txt.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      if ( words[i].length > maxChars) {
        words[i] = words[i].substring(0, maxChars - 1) + '&hellip;';
      }
    }

    txt = words.join(' ');

    return txt;
  }

}
