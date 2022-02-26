import { Contact } from './contact.interface';
import { InjectionToken } from '@angular/core';

export const CONTACT = new InjectionToken<Contact>('Contact');
