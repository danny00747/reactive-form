import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {OptionData} from "../../model/option.data";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => SelectComponent
      ),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() id;
  @Input() placeholder: string;
  @Input() fieldName: string;
  @Input() options: OptionData<any>[] = [];
  @Input() fontAwesomeClass: string;
  @Input() label: string;
  @Output() selectionChange = new EventEmitter<number>();
  @Input() parentForm: FormGroup;
  changed: (value: string) => void;

  onTouched!: Function;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {
  }

  onSelectionChange(value: any) {
    this.onTouched();
    this.changed(value);
  }


  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
   // this.selectionChange = obj;
  }

}
