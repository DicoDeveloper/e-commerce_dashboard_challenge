import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { User } from 'src/app/domain/dtos/user';
import { AppIdentifiers } from 'src/app/domain/app.identifiers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: '../pages/toolbar/toolbar.component.html',
  styleUrls: ['../pages/toolbar/toolbar.component.scss']
})
export class ToolbarComponent {

  mobileQuery: MediaQueryList;
  company: string;
  user = {} as User;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private readonly router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);

    this.company = 'WA Varejo - Matriz';
  }

  drawerToggle() {
    document.getElementById(AppIdentifiers.DrawerToggleClick).click();
  }

  setDashboard() {
    this.router.navigate(['/home/dashboard']);
  }

}
