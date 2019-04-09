import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbspToSpace'
})

export class NbspToSpacePipe implements PipeTransform {

  transform(str: any): any {
    if (!str) { return; }

    return str.replace(/\u00a0/g, ' ');
  }

}
