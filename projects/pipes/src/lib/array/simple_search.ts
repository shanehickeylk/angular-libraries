import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleSearch'
})

export class SimpleSearchPipe implements PipeTransform {

  transform(value, field: string, letter: string) {
    return value.filter((item) => item[field].toUpperCase().includes(letter.toUpperCase()));
  }

}
