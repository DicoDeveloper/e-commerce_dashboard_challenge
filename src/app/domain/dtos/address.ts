import { BaseDto } from "src/app/core/dtos/baseDto";

export class Address extends BaseDto {
  postCode: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
}
