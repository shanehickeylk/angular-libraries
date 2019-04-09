import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeColorsForHeatMap'
})

export class RelativeColorsForHeatMapPipe implements PipeTransform {

  minOpacity = 0.35;
  maxOpacity = 0.75;
  opacityRange = this.maxOpacity - this.minOpacity;

  transform(collection: Array<any>, criterion: string): Array<any> {
    const uniqueAbsValues = collection.reduce((values, val) => {
      const absValue = val[criterion] && Math.abs(val[criterion]);
      if (absValue && values.indexOf(absValue) === -1) {
        values.push(absValue);
      }
      return values;
    }, []);

    const maxValue = Math.max(...uniqueAbsValues);
    const minValue = Math.min(...uniqueAbsValues);

    return collection
      .map(obj => {
        Object.assign(obj, { color: this.colorForElement(obj, criterion) });
        const opacityValue =
          (Math.abs(obj[criterion]) - minValue) /
          (maxValue - minValue) * this.opacityRange + this.minOpacity;
        return Object.assign(obj, { opacity: opacityValue });
      });
  }

  colorForElement(element, criterion) {
    if (element[criterion] === 0) { return '#607CA5'; }
    return (element[criterion] > 0) ? '#60A638' : '#DB4848';
  }

}
