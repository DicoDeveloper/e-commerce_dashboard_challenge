import { BaseDto } from "src/app/core/dtos/baseDto";

export class OrderItem extends BaseDto {
  name: string;
  description: string;
  quantity: number;
  value: number;
}
