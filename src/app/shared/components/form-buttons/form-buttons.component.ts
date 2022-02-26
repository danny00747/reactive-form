import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css']
})
export class FormButtonsComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() isDisabled: boolean;

  @Output() onSave = new EventEmitter<void>();
  @Output() onDirty = new EventEmitter<void>();
  @Output() OnReset = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
