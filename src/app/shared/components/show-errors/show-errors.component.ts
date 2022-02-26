import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DetectErrorsPipe} from "../../pipes/detect-errors.pipe";

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css'],
})
export class ShowErrorsComponent implements OnInit {

  @Input() ctrl: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

  /*
    shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOfErrors(): string[] {
    // console.log(Object.keys(this.ctrl.parent.controls)) -> field name
    return Object.keys(this.ctrl.errors)
      .map((err: string) => this.FORM_ERRORS[err](this.ctrl.getError(err)));
  }

   */


}
