import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSpace'
})

export class NoSpacePipe implements PipeTransform {

  transform(str: any): any {
    if (!str) { return; }

    return str.replace(/ /g, '');
  }

}
