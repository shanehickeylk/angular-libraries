import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})

export class TrimPipe implements PipeTransform {

  transform(text: any): any {
    if (!text) { return; }

    return text.trim();
  }

}
