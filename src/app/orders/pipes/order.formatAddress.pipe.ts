import { Pipe, PipeTransform } from "@angular/core";
import { Address } from "src/app/domain/dtos/address";

@Pipe({ name: 'orderFormatAddress' })

export class OrderFormatAddressPipe implements PipeTransform {
  transform(address: Address): string {
    if (address)
      return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} / ${address.state} - CEP: ${address.postCode}`;
    return '';
  }
}
