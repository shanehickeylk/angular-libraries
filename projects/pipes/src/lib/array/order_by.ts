import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, criteria: string | ((x, y) => number), direction: string): Array<any> {
    if (!Array.isArray(array)) { return array; }
    direction = (['asc', 'desc'].indexOf(direction) > -1) ? direction : 'asc';

    if (criteria instanceof Function) {
      if (direction === 'asc') {
        return array.sort(criteria);
      } else {
        return array.sort(criteria).reverse();
      }
    }

    const sortedArray = array.sort(
      (a: any, b: any) => {
        if (this.compProperty(a, criteria) === null) { return -1; }
        if (this.compProperty(b, criteria) === null) { return  1; }

        return (this.compProperty(a, criteria) > this.compProperty(b, criteria)) ? 1 : -1;
      }
    );

    return (direction === 'asc') ? sortedArray : sortedArray.reverse();
  }

  compProperty(object, criteriaString) {
      const nestedProperties = criteriaString.split('.');
      const attr = nestedProperties.reduce(
        (latestAttribute, attribute) => latestAttribute[attribute],
        object
      );
      const isString = typeof attr === 'string' || attr instanceof String;
      return isString ? attr.latinize().toLowerCase() : attr;
  }

}
