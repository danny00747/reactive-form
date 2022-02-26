export interface OptionData<T> {
  value: T;
  label: string;
}

export type PhoneCodeOptions = '+32' | '+33' | '+31' | '+49';
export type BusinessTypeOptions = 'Shop/Cafe' | 'Rentals' | 'Research Agency' | 'Bowling Center';

export const PhoneCodOptionData: OptionData<PhoneCodeOptions>[] = [
  {value: '+32', label: 'BE (+32)'},
  {value: '+33', label: 'FR (+33)'},
  {value: '+31', label: 'NL (+31)'},
  {value: '+49', label: 'DE (+49)'}];

