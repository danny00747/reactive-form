import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export abstract class FormValidators {

  /**
   * RegExp modified: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
   */
  private static REGEXP_DOT_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  /**
   *  Matches 9 numbers after dialling code & doesn't allow zero as the first number
   */
  private static REGEXP_PHONE = /^[1-9](?:[0-9]●?){7}[0-9]$/;

  private static REGEXP_TVA = /^(BE)(\d{10}$)/; //Belgian

  static REGEXP_NATIONAL_NUMBER = /^\d\d\.\d\d\.\d\d-\d\d\d\.\d\d/; //Belgian


  static dotEmail(control: AbstractControl): ValidationErrors | null {
    return (FormValidators.REGEXP_DOT_EMAIL.test(control.value)) ? null : {invalidEmail: true};
  }

  static equal(value: () => string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      (value() === control.value) ? null : {mismatchedPasswords: true};
  }

  static validPhoneNumber(control: AbstractControl): ValidationErrors | null {
    return (FormValidators.REGEXP_PHONE.test(control.value)) ? null : {invalidPhoneNumber: true};
  }

  static validTVANumber(control: AbstractControl): ValidationErrors | null {
    return (FormValidators.REGEXP_TVA.test(control.value)) ? null : {invalidTVANumber: true};
  }

  static validNationalNumber(control: AbstractControl): ValidationErrors | null {
    return !(FormValidators.REGEXP_NATIONAL_NUMBER.test(control.value)) ? null : {invalidNationalNumber: true};
  }

  /**
   * Checks if a field is a valid national number (Belgian)
   */
  static validateNationalNumber(control: AbstractControl): ValidationErrors | null {

    if (!(FormValidators.REGEXP_NATIONAL_NUMBER.test(control.value))) return {invalidNationalNumber: true};

    // 2021 => 21
    const nowYear = parseInt((new Date()).getFullYear().toString().substring(2), 10);

    const parts = (control.value as string).split('-');
    // [YEAR, MONTH, DAY]
    const birthDate = parts[0].split('.');
    const [registrationRank, controlDigits] = parts[1].split('.');
    const year = parseInt(birthDate[0], 10);

    // = Compute
    let computeNumber = '';
    if (year <= nowYear) {
      computeNumber += '2';
    }
    computeNumber += `${birthDate[0]}${birthDate[1]}${birthDate[2]}${registrationRank}`;
    let result = parseInt(computeNumber, 10) % 97;
    result = 97 - result;

    if (result === parseInt(controlDigits, 10)) {
      return null;
    }

    return {invalidNationalNumber: true};
  }
}
