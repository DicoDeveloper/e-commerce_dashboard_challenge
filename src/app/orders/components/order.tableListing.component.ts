import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Order } from 'src/app/domain/dtos/order';
import { OrderService } from '../services/order.service';

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

  orders: Order[] = [];
  readonly tableColuns: string[] = ['number', 'createdAt', 'deliverydate', 'address', 'totalValue', 'actions'];
  resultsLength = 0;
  expandedElement: Order | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private readonly orderService: OrderService,
    private readonly _snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    this.setPaginatorEvent();
  }

  public setPaginatorEvent() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.orderService!.get(this.paginator.pageIndex * 20);
        }),
        map((data) => {
          this.resultsLength = data.totalCount;
          return data.orders;
        }),
        catchError(() => {
          return observableOf([]);
        })
      )
      .subscribe((data) => {
        this.orders = data as Order[];
      });
  }

}
