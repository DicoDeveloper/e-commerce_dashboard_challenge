import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidenavModule } from '../shared/modules/sidenav.module';
import { ToolbarModule } from '../shared/modules/toolbar.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ToolbarModule,
    SidenavModule,
  ],
  providers: [],
})
export class HomeModule { }
