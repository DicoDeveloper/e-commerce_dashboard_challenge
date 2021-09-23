import { Pipe, PipeTransform } from "@angular/core";
import { FormatterUtil } from "src/app/core/util/Formatter.Util";

@Pipe({ name: 'formattedPrice' })

export class FormattedPricePipe implements PipeTransform {
  transform(value: number, noSign: boolean = false): string {
    return noSign ? FormatterUtil.PriceFormat(value).replace('R$', '') : FormatterUtil.PriceFormat(value);
  }
}
