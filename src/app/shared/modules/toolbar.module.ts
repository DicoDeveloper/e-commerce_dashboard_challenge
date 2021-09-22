import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../components/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
