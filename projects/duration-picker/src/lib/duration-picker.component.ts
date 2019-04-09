import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const DURATION_HOURS = [
    { label: '0 hours', value: 0 },
    { label: '1 hour', value: 1 * 60 * 60 },
    { label: '2 hours', value: 2 * 60 * 60 },
    { label: '3 hours', value: 3 * 60 * 60 },
    { label: '4 hours', value: 4 * 60 * 60 },
    { label: '5 hours', value: 5 * 60 * 60 },
    { label: '6 hours', value: 6 * 60 * 60 },
    { label: '7 hours', value: 7 * 60 * 60 },
    { label: '8 hours', value: 8 * 60 * 60 }
];

export const DURATION_MINUTES = [
    { label: '0 minutes', value: 0 },
    { label: '5 minutes', value: 300 },
    { label: '10 minutes', value: 600 },
    { label: '15 minutes', value: 900 },
    { label: '20 minutes', value: 1200 },
    { label: '25 minutes', value: 1500 },
    { label: '30 minutes', value: 1800 },
    { label: '35 minutes', value: 2100 },
    { label: '40 minutes', value: 2400 },
    { label: '45 minutes', value: 2700 },
    { label: '50 minutes', value: 3000 },
    { label: '55 minutes', value: 3300 }
];

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-duration-picker',
  providers: [
    FormBuilder,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationPickerComponent),
      multi: true
    }
  ],
  templateUrl: 'duration-picker.component.html',
  styleUrls: ['duration-picker.component.scss']
})
export class DurationPickerComponent implements ControlValueAccessor {
  @Input('value') _value;
  maxDurationX = 32100;
  durationsInHours = DURATION_HOURS;
  durationsInMinutes = DURATION_MINUTES;
  duration: FormGroup;

  onChange = (_: any) => null;
  onTouched = () => null;

  constructor(private fb: FormBuilder) {
    this.duration = this.fb.group({
      durationHours: [''],
      durationMinutes: ['']
    });
  }

  @Input()
  set maxDuration(maxDuration: number) {
    this.maxDurationX = maxDuration;
    if (this.value > maxDuration) {
      this.duration.patchValue({
        durationHours: (Math.floor(maxDuration / 3600)) * 3600,
        durationMinutes: maxDuration % 3600
      });
      this.value = maxDuration;
    }
  }

  get maxDuration() {
    return this.maxDurationX;
  }

  get durationHours(): FormControl {
    return this.duration.controls.durationHours as FormControl;
  }

  get durationMinutes(): FormControl {
    return this.duration.controls.durationMinutes as FormControl;
  }

  get filteredDurationHours() {
    return this.durationsInHours.filter((d) => d.value <= (this.maxDuration - this.durationMinutes.value));
  }

  get filteredDurationMinutes() {
    return this.durationsInMinutes.filter((d) => {
      if (this.maxDuration - this.durationHours.value >= 3600) {
        return true;
      } else {
        return d.value <= (this.maxDuration % 3600);
      }
    });
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  get value() {
    return this._value;
  }

  writeValue(value: any): void {
    this.value = +value || 0;

    this.duration.patchValue({
      durationHours: (Math.floor(+this.value / 3600)) * 3600,
      durationMinutes: +this.value % 3600
    });
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
    this.duration.valueChanges.subscribe((fn) => {
      this.value = (+fn.durationHours) + (+fn.durationMinutes);
    });
  }

  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

}

// TODO this function should be called on control, not form group - for outside world
// it's only one control (though under the hood we have two).
// another thing – setting error to null can introduce incorrect behavour:
// validators are composable by nature, so if some other validator set error
// we don't have right to reset it here.
export function validateDuration(form: FormGroup) {
  if (form.controls.duration.value) {
    form.controls.duration.setErrors(null);
    return null;
  } else {
    form.controls.duration.setErrors({ zeroDuration: true });
    return true;
  }
}
