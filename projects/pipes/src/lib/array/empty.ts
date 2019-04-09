import { Pipe, PipeTransform } from '@angular/core';
import { AnyPipe } from './any';

@Pipe({
  name: 'empty'
})

export class EmptyPipe implements PipeTransform {

  transform(array: Array<any> | Set<any>): boolean {
    const thing = new AnyPipe();

    return !thing.transform(array);
  }

}
