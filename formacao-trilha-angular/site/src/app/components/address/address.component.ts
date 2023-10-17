import { Component, Input } from '@angular/core';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address!: Address;
  // address: any = {
  //   street: 'QL 2 Bloco A',
  //   number: 306,
  //   complement: '',
  //   state: 'DF',
  //   city: 'Brasilia',
  //   neighborhood: 'Guará I',
  //   zipCode: '71020-012',
  // };

  // constructor() {
  //   this.getAddressComplete(this.address);
  // }

  // getDataString(): string {
  //   console.log(this.address.street + ' ' + this.address.number);
  //   return this.address.street + ' ' + this.address.number;
  // }

  // getAddressComplete(address: any): void {
  //   console.log(
  //     address.street +
  //       ' ' +
  //       address.number +
  //       ' ' +
  //       address.city +
  //       ' ' +
  //       address.state +
  //       ' ' +
  //       address.neighborhood
  //   );
  // }
}
