import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedPipeModule } from 'src/app/shared/pipes/sharedPipe.Module';
import { OrderChartsComponent } from '../components/order.charts.component';
import { OrderChartsRoutingModule } from '../routes/order.charts-routing.module';
import { ChartModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    OrderChartsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    OrderChartsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    SharedPipeModule,
    ChartModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  exports: [
    OrderChartsComponent,
  ]
})
export class OrderChartsModule { }
