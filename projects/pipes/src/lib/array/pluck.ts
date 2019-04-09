import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck'
})

export class PluckPipe implements PipeTransform {

  transform(objects: any, attribute?: string): any {
    if (!objects) { return []; }

    return objects.map(object => object[attribute]);
  }

}
