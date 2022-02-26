import { Pipe, PipeTransform } from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";
import {FORM_ERRORS} from "../model/form-errors.model";

@Pipe({
  name: 'displayErrors'
})
export class DisplayErrorsPipe implements PipeTransform {

  transform(errors: ValidationErrors, ctrl: FormControl): string[] {
    return Object.keys(errors ?? {}).map((err: string) => FORM_ERRORS[err](ctrl.getError(err)));
  }

}
