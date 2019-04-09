import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})

export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(inputString: any): any {
    if (!inputString) { return ''; }

    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

}
