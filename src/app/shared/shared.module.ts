import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ShowErrorsComponent} from './components/show-errors/show-errors.component';
import {DisplayErrorsPipe} from './pipes/display-errors.pipe';
import {DetectErrorsPipe} from './pipes/detect-errors.pipe';
import {SelectComponent} from './components/select/select.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputRadioComponent} from './components/input-radio/input-radio.component';
import {ToastModule} from 'primeng/toast';
import {FormButtonsComponent} from './components/form-buttons/form-buttons.component';
import {InputMaskModule} from 'primeng/inputmask';
import {DividerModule} from 'primeng/divider';
import {BadgeModule} from 'primeng/badge';
import {TagModule} from 'primeng/tag';

@NgModule({
  declarations: [
    InputComponent,
    ShowErrorsComponent,
    DisplayErrorsPipe,
    DetectErrorsPipe,
    SelectComponent,
    InputRadioComponent,
    FormButtonsComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, InputMaskModule, BadgeModule, DividerModule, TagModule
  ],
  exports: [InputComponent, BadgeModule, ShowErrorsComponent, DetectErrorsPipe, ToastModule, FormButtonsComponent,
    SelectComponent, DividerModule, InputMaskModule, TagModule, DisplayErrorsPipe, InputRadioComponent, ReactiveFormsModule, InputMaskModule
  ]
})
export class SharedModule {
}
