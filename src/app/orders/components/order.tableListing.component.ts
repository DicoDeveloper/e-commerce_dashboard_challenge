import { Component, Injectable, OnInit } from '@angular/core';
import { Order } from 'src/app/domain/dtos/order';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-order-table-listing',
  templateUrl: '../pages/tableListing/order.tableListing.component.html',
  styleUrls: ['../pages/tableListing/order.tableListing.component.scss']
})
export class OrderTableListingComponent implements OnInit {

  orders: Order[] = [];

  constructor(
  ) { }

  ngOnInit() {

  }

}
