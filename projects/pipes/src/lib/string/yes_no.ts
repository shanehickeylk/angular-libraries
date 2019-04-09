import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})

export class YesNoPipe implements PipeTransform {

  transform(input: boolean): any {
    return input ? 'Yes' : 'No';
  }

}
