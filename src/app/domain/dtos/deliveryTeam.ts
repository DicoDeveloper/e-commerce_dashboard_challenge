import { BaseDto } from "src/app/core/dtos/baseDto";

export class DeliveryTeam extends BaseDto {
  name: string;
  description: string;
  vehicleLicensePlate: string;
}
