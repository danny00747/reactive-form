import {BusinessTypeOptions, OptionData} from "@app/shared/model/option.data";

export interface phoneDTO {
  phoneCode: string;
  phoneNumber: string;
}

export interface AddressDTO {
  street: string;
  city: string;
  houseNumber: string;
  zipCode: string;
  country: string;
}

export interface UserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?:string;
  phone: phoneDTO;
  addresses: AddressDTO[];
}

export interface CompanyDTO {
  owner: string;
  nationalNumber: string;
  tva: string;
  companyName: string;
  businessType: string;
  addresses: AddressDTO[];
}
