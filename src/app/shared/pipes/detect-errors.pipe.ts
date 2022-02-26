import {Pipe, PipeTransform} from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'detectErrors'
})
export class DetectErrorsPipe implements PipeTransform {

  transform(errors: ValidationErrors, ...args: unknown[]): boolean {
    return Object.keys(errors ?? {}).length !== 0;
  }

}
