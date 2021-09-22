import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderTableListingComponent } from '../components/order.tableListing.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderTableListingRoutingModule } from '../routers/order.tableListing-routing.module';

@NgModule({
  declarations: [
    OrderTableListingComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    OrderTableListingRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  providers: [],
  exports: [
    OrderTableListingComponent,
  ]
})
export class OrderTableListingModule { }
