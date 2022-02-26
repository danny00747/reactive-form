export const FORM_ERRORS = {
  required: () => `This field is required`,
  noWhitespaceRequired: () => `This field should not contain a whitespace`,
  invalidEmail: () => `This is not a valid email`,
  invalidPhoneNumber: () => `This is not a valid phone number`,
  mismatchedPasswords: () => `Passwords do not match`,
  invalidTVANumber: () => `This is not a valid VAT number`,
  invalidNationalNumber: () => `This is not a valid belgian national registry number`,
  minlength: ({requiredLength, actualLength}) => `Expected ${requiredLength} characters but got ${actualLength}`,
  maxlength: ({requiredLength, actualLength}) => `Expected ${requiredLength} characters but got ${actualLength}`,
  rangeValueToBig: ({requiredMinValue, requiredMaxValue, actual}) => `Must be between ${requiredMinValue} -  ${requiredMaxValue}  but got ${actual}`
};


const error_messages = {
  'email': [
    {type: 'required', message: 'Email is required.'},
    {type: 'minlength', message: 'Email length.'},
    {type: 'maxlength', message: 'Email length.'},
    {type: 'validEmail', message: 'please enter a valid email address.'}
  ],

  'password': [
    {type: 'required', message: 'password is required.'},
    {type: 'minlength', message: 'password length.'},
    {
      type: ({requiredLength, actualLength}) => `Expected ${requiredLength} characters but got ${actualLength}`,
      message: 'password length.'
    }
  ]
};
