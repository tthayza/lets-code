import { aboutData } from './about-data.model';
import { AddressData } from './address-data.model';

export interface AppData {
  features: any;
  about: aboutData;
  address: AddressData;
  footer: any;
}
