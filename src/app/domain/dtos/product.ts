import { BaseDto } from "src/app/core/dtos/baseDto";

export class Product extends BaseDto {
  name: string;
  description: string;
  value: number;
}
