import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ToastSeverities} from "@app/shared/enums/toastSeverities-type.enum";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UniversalValidators} from "ngx-validators";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  constructor( private readonly toast: MessageService) {
  }


  show(severity: ToastSeverities, detail: string): void {
    this.toast.add({
      severity,
      detail,
    });
  }
}
