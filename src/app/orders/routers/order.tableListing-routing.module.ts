import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableListingComponent } from '../components/order.tableListing.component';

const routes: Routes = [
  {
    component: OrderTableListingComponent,
    path: '',
  }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class OrderTableListingRoutingModule {
}
