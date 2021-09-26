import { BaseDto } from "src/app/core/dtos/baseDto";
import { Address } from "./address";
import { DeliveryTeam } from "./deliveryTeam";
import { OrderItem } from "./orderItem";

export class Order extends BaseDto {
  number: number;
  deliverydate: Date;
  totalValue: number;
  deliveryAddress: Address;
  items: OrderItem[];
  deliveryTeam: DeliveryTeam;
}
