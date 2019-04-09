import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractProperty'
})

export class ExtractPropertyPipe implements PipeTransform {

  transform(object: any, property: string): any {
    if (typeof property !== 'string') { return object; }
    return object[property];
  }

}
