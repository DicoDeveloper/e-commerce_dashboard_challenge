import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-order-charts',
  templateUrl: '../pages/charts/order.charts.component.html',
  styleUrls: ['../pages/charts/order.charts.component.scss']
})
export class OrderChartsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {

  }

}
