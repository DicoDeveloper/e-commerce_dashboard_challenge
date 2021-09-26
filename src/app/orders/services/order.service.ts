import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { Order } from 'src/app/domain/dtos/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  private readonly API_WAP_SERVER_ORDER = '/api/v1/orders';

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  async get(skip: number = 0, take: number = 20): Promise<any> {
    return Object.getOwnPropertyDescriptor(
      await this.getResponse(`${this.API_WAP_SERVER_ORDER}?skip=${skip}&take=${take}`).toPromise(),
      'data'
    ).value;
  }

  async getById(id: number): Promise<Order> {
    return Object.getOwnPropertyDescriptor(
      await this.getResponse(
        `${this.API_WAP_SERVER_ORDER}/${id}`
      ).toPromise(),
      'data'
    ).value;
  }
}
