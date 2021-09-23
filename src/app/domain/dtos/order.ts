import { BaseDto } from "src/app/core/dtos/baseDto";
import { Address } from "./address";
import { DeliveryTeam } from "./deliveryTeam";
import { Product } from "./product";

export class Order extends BaseDto {
  number: number;
  deliverydate: Date;
  totalValue: number;
  address: Address;
  products: Product[];
  deliveryTeam: DeliveryTeam;
}
