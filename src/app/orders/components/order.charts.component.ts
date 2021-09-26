import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/domain/dtos/order';
import { OrderService } from '../services/order.service';

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
  public palette: string[];

  constructor(
    private readonly orderService: OrderService,
    private readonly _snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    this.primaryXAxis = { valueType: 'Category', };
    this.tooltip = { enable: true };
    this.legendSettings = { visible: true };
    this.palette = ['#1bc5bd', '#7f24ff'];

    this.chartData = [
      { month: 'Janeiro', quantity_created: 0, quantity_delivered: 0 }, { month: 'Fevereiro', quantity_created: 0, quantity_delivered: 0 },
      { month: 'Março', quantity_created: 0, quantity_delivered: 0 }, { month: 'Abril', quantity_created: 0, quantity_delivered: 0 },
      { month: 'Maio', quantity_created: 0, quantity_delivered: 0 }, { month: 'Junho', quantity_created: 0, quantity_delivered: 0 },
      { month: 'Julho', quantity_created: 0, quantity_delivered: 0 }, { month: 'Agosto', quantity_created: 0, quantity_delivered: 0 },
      { month: 'Setembro', quantity_created: 0, quantity_delivered: 0 }, { month: 'Outubro', quantity_created: 0, quantity_delivered: 0 },
      { month: 'Novembro', quantity_created: 0, quantity_delivered: 0 }, { month: 'Dezembro', quantity_created: 0, quantity_delivered: 0 }
    ];

    try {
      const orders = ((await this.orderService.get(0, 999)).orders as Order[]);
      const januaryCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '01').length;
      const februaryCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '02').length;
      const marchCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '03').length;
      const aprilCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '04').length;
      const mayCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '05').length;
      const juneCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '06').length;
      const julyCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '07').length;
      const augustCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '08').length;
      const septemberCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '09').length;
      const octoberCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '10').length;
      const novemberCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '11').length;
      const decemberCreatedQuantity = orders.filter(o => o.createdAt.split('-')[1] == '12').length;
      const januaryDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '01').length;
      const februaryDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '02').length;
      const marchDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '03').length;
      const aprilDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '04').length;
      const mayDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '05').length;
      const juneDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '06').length;
      const julyDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '07').length;
      const augustDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '08').length;
      const septemberDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '09').length;
      const octoberDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '10').length;
      const novemberDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '11').length;
      const decemberDeliveredQuantity = orders.filter(o => o.deliverydate && o.deliverydate.toString().split('-')[1] == '12').length;
      this.chartData = [];
      if (januaryCreatedQuantity > 0 || januaryDeliveredQuantity > 0)
        this.chartData.push({ month: 'Janeiro', quantity_created: januaryCreatedQuantity, quantity_delivered: januaryDeliveredQuantity });
      if (februaryCreatedQuantity > 0 || februaryDeliveredQuantity > 0)
        this.chartData.push({ month: 'Fevereiro', quantity_created: februaryCreatedQuantity, quantity_delivered: februaryDeliveredQuantity });
      if (marchCreatedQuantity > 0 || marchDeliveredQuantity > 0)
        this.chartData.push({ month: 'Março', quantity_created: marchCreatedQuantity, quantity_delivered: marchDeliveredQuantity });
      if (aprilCreatedQuantity > 0 || aprilDeliveredQuantity > 0)
        this.chartData.push({ month: 'Abril', quantity_created: aprilCreatedQuantity, quantity_delivered: aprilDeliveredQuantity });
      if (mayCreatedQuantity > 0 || mayDeliveredQuantity > 0)
        this.chartData.push({ month: 'Maio', quantity_created: mayCreatedQuantity, quantity_delivered: mayDeliveredQuantity });
      if (juneCreatedQuantity > 0 || juneDeliveredQuantity > 0)
        this.chartData.push({ month: 'Junho', quantity_created: juneCreatedQuantity, quantity_delivered: juneDeliveredQuantity });
      if (julyCreatedQuantity > 0 || julyDeliveredQuantity > 0)
        this.chartData.push({ month: 'Julho', quantity_created: julyCreatedQuantity, quantity_delivered: julyDeliveredQuantity });
      if (augustCreatedQuantity > 0 || augustDeliveredQuantity > 0)
        this.chartData.push({ month: 'Agosto', quantity_created: augustCreatedQuantity, quantity_delivered: augustDeliveredQuantity });
      if (septemberCreatedQuantity > 0 || septemberDeliveredQuantity > 0)
        this.chartData.push({ month: 'Setembro', quantity_created: septemberCreatedQuantity, quantity_delivered: septemberDeliveredQuantity });
      if (octoberCreatedQuantity > 0 || octoberDeliveredQuantity > 0)
        this.chartData.push({ month: 'Outubro', quantity_created: octoberCreatedQuantity, quantity_delivered: octoberDeliveredQuantity });
      if (novemberCreatedQuantity > 0 || novemberDeliveredQuantity > 0)
        this.chartData.push({ month: 'Novembro', quantity_created: novemberCreatedQuantity, quantity_delivered: novemberDeliveredQuantity });
      if (decemberCreatedQuantity > 0 || decemberDeliveredQuantity > 0)
        this.chartData.push({ month: 'Dezembro', quantity_created: decemberCreatedQuantity, quantity_delivered: decemberDeliveredQuantity });
    } catch (exception) {
      this._snackBar.open(exception, 'Ok', { duration: 4000, });
    }
  }

}
