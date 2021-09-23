import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderChartsComponent } from '../components/order.charts.component';

const routes: Routes = [
  {
    component: OrderChartsComponent,
    path: '',
  }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class OrderChartsRoutingModule {
}
