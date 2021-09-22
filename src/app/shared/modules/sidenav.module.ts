import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from '../components/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
  ],
  providers: [],
  exports: [
    SidenavComponent,
  ]
})
export class SidenavModule { }
