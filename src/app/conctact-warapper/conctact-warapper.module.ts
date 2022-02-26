import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConctactWarapperComponent} from './conctact-warapper/conctact-warapper.component';
import {PersonalConctactComponent} from './personal-conctact/personal-conctact.component';
import {CompanyConctactComponent} from './company-conctact/company-conctact.component';
import {AddressComponent} from './address/address.component';
import {BrowserModule} from "@angular/platform-browser";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "@app/shared/shared.module";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
  declarations: [ConctactWarapperComponent, PersonalConctactComponent, CompanyConctactComponent, AddressComponent],
  imports: [CommonModule, BrowserModule, ConfirmPopupModule, BrowserAnimationsModule, NgbModule, SharedModule
  ],
  exports: [
    ConctactWarapperComponent,
    PersonalConctactComponent,
    CompanyConctactComponent
  ],
  providers: [MessageService, DialogService]
})
export class ConctactWarapperModule {
}
