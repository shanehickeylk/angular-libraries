import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scaleForHeatMap'
})

export class ScaleForHeatMapPipe implements PipeTransform {

  biggerCircleRadius = 30;
  smallerCircleRadius = 8;
  radiusRange = this.biggerCircleRadius - this.smallerCircleRadius;
  uniqueValue = 14;

  transform(collection: Array<any>, criterion: string, minMax?: number[]): Array<any> {

    const uniqueValues = collection.reduce((values, val) => {
      if (val[criterion] && !values.includes(val[criterion])) {
        values.push(val[criterion]);
      }
      return values;
    }, []);

    if (uniqueValues.length < 2) {
      return collection.map((obj: any) => {
        this.addScaleToElement(obj, criterion, this.uniqueValue);
        return Object.assign(obj, { zIndex: 1 });
      });
    }

    let maxValue: number;
    let minValue: number;

    if (minMax) {
      [minValue, maxValue] = minMax;
    } else {
      maxValue = Math.max(...uniqueValues);
      minValue = Math.min(...uniqueValues);
    }

    return collection.map(obj => {
        const finalValue = (obj[criterion] - minValue) / (maxValue - minValue) * this.radiusRange + this.smallerCircleRadius;
        return this.addScaleToElement(obj, criterion, finalValue);
      })
      .sort((a, b) => b.scale - a.scale)
      .map((obj, index) => {
        return Object.assign(obj, { zIndex: index });
      });

  }

  addScaleToElement(element, criterion, scale) {
    if (element[criterion] === 0 || element[criterion] === undefined) { scale = 0; }
    return Object.assign(element, { scale: scale });
  }

}
