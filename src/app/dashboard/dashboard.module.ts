import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderChartsModule } from '../orders/modules/order.charts.module';
import { OrderTableListingModule } from '../orders/modules/order.tableListing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    OrderChartsModule,
    OrderTableListingModule,
  ],
  providers: [],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
