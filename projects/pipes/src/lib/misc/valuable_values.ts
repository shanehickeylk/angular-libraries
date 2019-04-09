import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'valuableValues'
})

export class ValuableValuesPipe implements PipeTransform {

  transform(stream: Observable<any>) {
    return stream.pipe(filter(item => item !== null));
  }

}
