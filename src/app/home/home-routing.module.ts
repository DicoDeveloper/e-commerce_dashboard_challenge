import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    children: [
      {
        component: DashboardComponent,
        path: 'dashboard',
      },
      {
        path: 'order-table-listing',
        loadChildren: () =>
          import('../orders/modules/order.tableListing.module').then((m) => m.OrderTableListingModule),
      }
    ],
    component: HomeComponent,
    path: '',
  }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {
}
