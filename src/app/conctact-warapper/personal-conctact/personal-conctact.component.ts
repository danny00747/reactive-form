import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UniversalValidators} from "ngx-validators";
import {FormValidators} from "@app/shared/validators/form-validators";
import {PhoneCodeEnum} from "@app/shared/enums/phoneCode.enum";
import {AddressComponent} from "@app/conctact-warapper/address/address.component";
import {CONTACT} from "@app/conctact-warapper/interfaces/contact.token";
import {Contact} from "@app/conctact-warapper/interfaces/contact.interface";
import {ToastSeverities} from "@app/shared/enums/toastSeverities-type.enum";
import {ConfirmationService} from "primeng/api";
import {ToastService} from "@app/core/services/toast.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-personal-conctact',
  templateUrl: './personal-conctact.component.html',
  styleUrls: ['./personal-conctact.component.css'],
  providers: [
    {
      provide: CONTACT,
      useExisting: PersonalConctactComponent
    },
  ],
})
export class PersonalConctactComponent implements OnInit, Contact {

  isCollapsed = true;

  personalFrom: FormGroup;

  PhoneEnum = PhoneCodeEnum;

  contactsArray: FormGroup;

  get firstNameField(): FormControl {
    return this.personalFrom.get('firstName') as FormControl;
  }

  get phoneGroup(): FormGroup {
    return this.personalFrom.get('phone') as FormGroup;
  }

  get phoneCodeField(): FormControl {
    return this.phoneGroup.get('phoneCode') as FormControl;
  }

  get phoneNumberField(): FormControl {
    return this.phoneGroup.get('phoneNumber') as FormControl;
  }

  get passwordField(): FormControl {
    return this.personalFrom?.get('password') as FormControl;
  }

  get confirmPasswordField(): FormControl {
    return this.personalFrom?.get('confirmPassword') as FormControl;
  }

  get isCollapsedField(): boolean {
    return this.personalFrom?.get('isCollapsed').value as boolean;
  }

  get addressArray(): FormArray {
    return this.personalFrom?.get('addresses') as FormArray;
  }

  get contactArrayField(): FormArray {
    return this.contactsArray?.get('contacts') as FormArray;
  }

  constructor(private confirmationService: ConfirmationService,
              private router: Router,
              public toastService: ToastService) {
  }

  ngOnInit(): void {
    this.generateContacts();
  }

  generatePersonalForm(): FormGroup {
    this.personalFrom = new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required, UniversalValidators.noWhitespace]}),
      lastName: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      email: new FormControl('', [Validators.required, FormValidators.dotEmail]),
      addresses: new FormArray([AddressComponent.addUserAddress()]),
      isCollapsed: new FormControl(true),
      phone: new FormGroup({
        phoneCode: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required, FormValidators.validPhoneNumber]),
      }),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required,
        FormValidators.equal(() => (this.personalFrom) ? this.personalFrom.controls.password.value : '')
      ]),
    });
    return this.personalFrom;
  }

  generateContacts(): void {
    this.contactsArray = new FormGroup({contacts: new FormArray([this.generatePersonalForm()])});
  }

  addAddress(): void {
    this.addressArray?.push(AddressComponent.addUserAddress());
  }

  deleteAddress(index: number): void {
    this.addressArray?.removeAt(index);
  }

  async submitPersonalFrom(control: AbstractControl) {
    console.log(control.value);
    let route = this.router.config.find((route: Route) => route.path === 'home');
    route.data = {personalContact: control.value};
    await this.router.navigateByUrl('/recap');
  }

  makeDirty(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: AbstractControl) => control.markAsTouched());
  }

  onCancel(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: AbstractControl) => control.markAsUntouched());
  }

  add(): void {
    console.log('personal contact');
    this.contactArrayField?.push(this.generatePersonalForm());
  }

  confirmDelete(event: EventTarget, index: number): void {
    this.confirmationService.confirm({
      target: event,
      message: 'Are you sure that you want to delete this contact?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contactArrayField?.removeAt(index);
        this.toastService.show(ToastSeverities.INFO, 'Successfully deleted !');
      },
      reject: () => {
        this.toastService.show(ToastSeverities.ERROR, 'Cancelled !');
      }
    });
  }
}

