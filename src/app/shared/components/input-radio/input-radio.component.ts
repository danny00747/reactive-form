import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {PhoneCodeEnum} from "../../enums/phoneCode.enum";

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => InputRadioComponent
      ),
      multi: true
    }
  ]
})
export class InputRadioComponent implements ControlValueAccessor {

  @Input() parentForm: FormGroup;

  @Input() fieldName: string;

  @Input() placeholder: string;

  @Input() fontAwesomeClass: string;

  @Input() enum: PhoneCodeEnum;

  value: string;

  changed: (value: string) => void;

  touched: () => void;

  @Input() isDisabled: boolean;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
