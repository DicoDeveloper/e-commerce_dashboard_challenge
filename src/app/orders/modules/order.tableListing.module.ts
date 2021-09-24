import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderTableListingComponent } from '../components/order.tableListing.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderTableListingRoutingModule } from '../routes/order.tableListing-routing.module';
import { OrderFormatAddressPipe } from '../pipes/order.formatAddress.pipe';
import { SharedPipeModule } from 'src/app/shared/pipes/sharedPipe.Module';

@NgModule({
  declarations: [
    OrderTableListingComponent,
    OrderFormatAddressPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    OrderTableListingRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    SharedPipeModule,
  ],
  providers: [],
  exports: [
    OrderTableListingComponent,
    OrderFormatAddressPipe,
  ]
})
export class OrderTableListingModule { }
