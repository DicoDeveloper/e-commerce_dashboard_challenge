import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Address } from 'src/app/domain/dtos/address';
import { DeliveryTeam } from 'src/app/domain/dtos/deliveryTeam';
import { Order } from 'src/app/domain/dtos/order';
import { Product } from 'src/app/domain/dtos/product';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-order-table-listing',
  templateUrl: '../pages/tableListing/order.tableListing.component.html',
  styleUrls: ['../pages/tableListing/order.tableListing.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderTableListingComponent implements OnInit {

  orders: Order[] = [{
    number: 1, createdAt: '01/09/2021', deliverydate: new Date, totalValue: 1550.90, address: {
      city: 'Blumenau', neighborhood: 'Vila Nova', number: '123A', postCode: '89056-100', state: 'Santa Catarina', street: 'Johann Ohf',
    } as Address,
    deliveryTeam: { name: 'Entregadores a Jato', description: 'Entregadores da zona norte de Santa Catarina', vehicleLicensePlate: 'MEM-6227' } as DeliveryTeam,
    products: [{ description: 'Produto novo', name: 'Camisa Polo', value: 99.90 } as Product]
  } as Order,
  {
    number: 1, createdAt: '01/09/2021', deliverydate: new Date, totalValue: 1550.90, address: {
      city: 'Blumenau', neighborhood: 'Vila Nova', number: '123A', postCode: '89056-100', state: 'Santa Catarina', street: 'Johann Ohf',
    } as Address,
    deliveryTeam: { name: 'Entregadores a Jato', description: 'Entregadores da zona norte de Santa Catarina', vehicleLicensePlate: 'MEM-6227' } as DeliveryTeam,
    products: [{ description: 'Produto novo', name: 'Camisa Polo', value: 99.90 } as Product]
  } as Order];
  readonly tableColuns: string[] = ['number', 'createdAt', 'deliverydate', 'address', 'totalValue', 'actions'];
  resultsLength = 0;
  expandedElement: Order | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
  ) { }

  ngOnInit() {

  }

}
