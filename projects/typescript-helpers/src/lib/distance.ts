const CONVERSIONS = {
  miles:       1609.0,
  kilometers:  1000.0,
  meters:      1.0,
  centimeters: 1 / 100.0,
  millimeters: 1 / 1000.0
};

export class Distance {
  valueInMeters: number;

  constructor(value: number, units = 'meters') {
    this.valueInMeters = value * CONVERSIONS[units];
  }

  asMeters() {
    return this.valueInMeters;
  }

  asMillimeters() {
    return this.valueInMeters / CONVERSIONS.millimeters;
  }

  asMiles() {
    return this.valueInMeters / CONVERSIONS.miles;
  }

  humanize(unitSystem = 'imperial'): string {
    const result = unitSystem === 'metric'
      ? { distance: this.valueInMeters / CONVERSIONS.kilometers, unit: 'km', smallUnit: 'm', factor: 1000, smallBorder: 0.9 }
      : { distance: this.valueInMeters / CONVERSIONS.miles, unit: 'mi', smallUnit: 'yd', factor: 1760, smallBorder: 0.3 };

    if (result.distance < result.smallBorder) {
      let distance = result.distance * result.factor;

      if (distance < 40) { return `< 50 ${result.smallUnit}`; }

      distance = Math.round(distance / 50) * 50;

      return `${formatter(distance)} ${result.smallUnit}`;
    }

    return `${formatter(result.distance)} ${result.unit}`;
  }
}

function formatter(num) {
  return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}
