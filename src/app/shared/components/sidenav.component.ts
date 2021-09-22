import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AppIdentifiers } from 'src/app/domain/app.identifiers';

@Component({
  selector: 'app-shared-sidenav',
  templateUrl: '../pages/sidenav/sidenav.component.html',
  styleUrls: ['../pages/sidenav/sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  ordersCount: number;
  drawerToggleId: string = AppIdentifiers.DrawerToggleClick;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private readonly router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit() {
    this.router.navigate(['/home/dashboard']);
  }

}
