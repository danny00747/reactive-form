import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CONTACT} from "@app/conctact-warapper/interfaces/contact.token";
import {Contact} from "@app/conctact-warapper/interfaces/contact.interface";
import {FormValidators} from "@app/shared/validators/form-validators";
import {AddressComponent} from "@app/conctact-warapper/address/address.component";
import {BusinessTypeOptions, OptionData} from "@app/shared/model/option.data";
import {ConfirmationService} from "primeng/api";
import {ToastService} from "@app/core/services/toast.service";
import {ToastSeverities} from "@app/shared/enums/toastSeverities-type.enum";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-company-conctact',
  templateUrl: './company-conctact.component.html',
  styleUrls: ['./company-conctact.component.css'],
  providers: [
    {
      provide: CONTACT,
      useExisting: CompanyConctactComponent
    },
  ],
})
export class CompanyConctactComponent implements OnInit, Contact {
  isCollapsed = true;

  companyFrom: FormGroup;

  companiesArray: FormGroup;

  BusinessTypOptionData: OptionData<BusinessTypeOptions>[] = [
    {value: 'Shop/Cafe', label: 'Shop/Cafe'},
    {value: 'Rentals', label: 'Rentals'},
    {value: 'Bowling Center', label: 'Bowling Center'},
    {value: 'Research Agency', label: 'Research Agency'}];

  get businessTypeField(): FormControl {
    return this.companyFrom.get('businessType') as FormControl;
  }

  get tvaField(): FormControl {
    return this.companyFrom.get('tva') as FormControl;
  }

  get nationalNumberField(): FormControl {
    return this.companyFrom.get('nationalNumber') as FormControl;
  }

  get companyNameField(): FormControl {
    return this.companyFrom.get('companyName') as FormControl;
  }

  get addressArray(): FormArray {
    return this.companyFrom?.get('addresses') as FormArray;
  }

  get companyArrayField(): FormArray {
    return this.companiesArray?.get('companies') as FormArray;
  }

  constructor(private confirmationService: ConfirmationService,
              private router: Router,
              public toastService: ToastService) {}

  ngOnInit(): void {
    this.generateCompanies();
  }

  generateCompanyForm(): FormGroup {
    this.companyFrom =
      new FormGroup({
        owner: new FormControl('', {validators: [Validators.required]}),
        tva: new FormControl('', {validators: [Validators.required, FormValidators.validTVANumber]}),
        nationalNumber: new FormControl('', {validators: [Validators.required, FormValidators.validateNationalNumber]}),
        companyName: new FormControl('', [Validators.required]),
        businessType: new FormControl('', [Validators.required]),
        addresses: new FormArray([AddressComponent.addUserAddress()])
      });
    return this.companyFrom;
  }

  generateCompanies(): void {
    this.companiesArray = new FormGroup({companies: new FormArray([this.generateCompanyForm()])});
  }

  addAddress(): void {
    this.addressArray?.push(AddressComponent.addUserAddress());
  }

  add(): void {
    console.log('compnay contact');
    this.companyArrayField?.push(this.generateCompanyForm());
  }

 async submitCompanyForm(formGroup: any) {
    console.log(formGroup.value);
    console.log(formGroup.valid);
    let route = this.router.config.find((route: Route) => route.path === 'home');
    route.data = {companyContact: formGroup.value};
    await this.router.navigateByUrl('/recap');
  }

  makeDirty(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: AbstractControl) => control.markAsTouched());
  }

  onCancel(formGroup: any) {
    Object.values(formGroup.controls).forEach((control: AbstractControl) => control.markAsUntouched());
  }

  confirmDelete(event: EventTarget, index: number): void {
    this.confirmationService.confirm({
      target: event,
      message: 'Are you sure that you want to delete this company?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.companyArrayField?.removeAt(index);
        this.toastService.show(ToastSeverities.INFO, 'Successfully deleted !');
      },
      reject: () => {
        this.toastService.show(ToastSeverities.ERROR, 'Cancelled !');
      }
    });
  }

}
