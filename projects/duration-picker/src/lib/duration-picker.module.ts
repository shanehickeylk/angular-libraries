import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DurationPickerComponent } from './duration-picker.component';

@NgModule({
  declarations: [DurationPickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DurationPickerComponent, ReactiveFormsModule]
})
export class DurationPickerModule { }
