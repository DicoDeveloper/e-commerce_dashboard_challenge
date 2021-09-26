import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E commerce Dashboard Challenge';

  constructor(
    private readonly router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.registrarIconesSVG();
    this.router.navigate(['/splash']);
  }

  private registrarIconesSVG() {
    this.iconRegistry.addSvgIcon(
      'loader',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/loader.svg')
    );
  }
}
