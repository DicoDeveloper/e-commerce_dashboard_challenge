import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AppIdentifiers } from 'src/app/domain/app.identifiers';
import { OrderService } from 'src/app/orders/services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/domain/dtos/order';

@Component({
  selector: 'app-shared-sidenav',
  templateUrl: '../pages/sidenav/sidenav.component.html',
  styleUrls: ['../pages/sidenav/sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  ordersCount: number | null;
  drawerToggleId: string = AppIdentifiers.DrawerToggleClick;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private readonly router: Router,
    private readonly orderService: OrderService,
    private readonly _snackBar: MatSnackBar,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  async ngOnInit() {
    this.router.navigate(['/home/dashboard']);
    try {
      const result = await this.orderService.get(0, 999);
      const count = (result.orders as Order[]).filter((o: Order) => !o.deliverydate).length;
      this.ordersCount = count > 0 ? count : null;
    } catch (exception) {
      this._snackBar.open(exception, 'Ok', { duration: 4000, });
    }
  }

}
