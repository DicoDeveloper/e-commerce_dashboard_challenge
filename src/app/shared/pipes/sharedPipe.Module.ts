import { NgModule } from '@angular/core';
import { FormattedPricePipe } from './FormattedPrice.Pipe';

@NgModule({
  declarations: [
    FormattedPricePipe,
  ],
  imports: [],
  exports: [
    FormattedPricePipe,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedPipeModule { }
