import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-order-charts',
  templateUrl: '../pages/charts/order.charts.component.html',
  styleUrls: ['../pages/charts/order.charts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderChartsComponent implements OnInit {

  public chartData: Object[];
  public primaryXAxis: Object;
  public tooltip: Object;
  public legendSettings: Object;

  constructor(
  ) { }

  ngOnInit() {
    this.chartData = [
      { year: 'Janeiro', gold: 35, silver: 25 }, { year: 'Fevereiro', gold: 28, silver: 20 },
      { year: 'Março', gold: 34, silver: 21 }, { year: 'Abril', gold: 32, silver: 15 },
      { year: 'Maio', gold: 40, silver: 30 }, { year: 'Junho', gold: 32, silver: 15 },
      { year: 'Julho', gold: 32, silver: 15 }, { year: 'Agosto', gold: 32, silver: 15 },
      { year: 'Setembro', gold: 32, silver: 15 }, { year: 'Outubro', gold: 32, silver: 15 },
      { year: 'Novembro', gold: 32, silver: 15 }, { year: 'Dezembro', gold: 32, silver: 15 }
    ];
    this.primaryXAxis = { valueType: 'Category', };
    this.tooltip = { enable: true };
    this.legendSettings = { visible: true };
  }

}
