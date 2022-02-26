import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UniversalValidators} from "ngx-validators";
import {ConfirmationService} from "primeng/api";
import {ToastService} from "@app/core/services/toast.service";
import {ToastSeverities} from "@app/shared/enums/toastSeverities-type.enum";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  isCollapsed = true;

  @Input() childForm: FormGroup;
  @Input() parentForm: FormArray;

  @Input() arrayIndex: number;

  @Input() totatAddresses: number;

  @Input() addressArray: FormArray;

  @Output() deleteAddressEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() onAddAddress = new EventEmitter<void>();


  get streetField(): FormControl {
    return this.childForm?.get('street') as FormControl;
  }

  get countryField(): FormControl {
    return this.childForm?.get('country') as FormControl;
  }

  get houseNumberField(): FormControl {
    return this.childForm?.get('houseNumber') as FormControl;
  }

  get cityField(): FormControl {
    return this.childForm?.get('city') as FormControl;
  }

  constructor(private confirmationService: ConfirmationService, public toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  static addUserAddress(): FormGroup {
    return new FormGroup({
      street: new FormControl('', {validators: [Validators.required]}),
      city: new FormControl('', {validators: [Validators.required]}),
      houseNumber: new FormControl('', {validators: [Validators.required, UniversalValidators.isInRange(1, 5000)]}),
      zipCode: new FormControl('', {validators: [Validators.required, Validators.minLength(4)]}),
      country: new FormControl('', {validators: [Validators.required]})
    });
  }

  addAddress(): void {
    // this.addressArray?.push(AddressComponent.addUserAddress());
    this.onAddAddress.emit();
  }

  deleteAddress(index: number): void {
    // this.deleteAddressEvent.next(index);
    this.addressArray?.removeAt(index);
  }

  confirmDelete(event: EventTarget, index: number): void {
    this.confirmationService.confirm({
      target: event,
      message: 'Are you sure that you want to delete this address?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteAddress(index);
        this.toastService.show(ToastSeverities.INFO, 'Successfully deleted !');
      },
      reject: () => {
        this.toastService.show(ToastSeverities.ERROR, 'Cancelled !');
      }
    });
  }
}
