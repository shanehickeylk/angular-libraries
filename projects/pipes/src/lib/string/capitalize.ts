import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {

  transform(inputString: any): any {
    if (!inputString) { return ''; }
    return inputString.replace(/(?:^|\s)\S/g, (char) =>  char.toUpperCase());
  }

}
