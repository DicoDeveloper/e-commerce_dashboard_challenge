export class FormatterUtil {

  public static DocumentFormat(document: string): string {
    if (document.length < 14) {
      if (document.length < 11)
        return document;
      else
        return `${document.substr(0, 3)}.${document.substr(3, 3)}.${document.substr(6, 3)}-${document.substr(9, 2)}`;
    }
    return `${document.substr(0, 2)}.${document.substr(2, 3)}.${document.substr(5, 3)}/${document.substr(8, 4)}-${document.substr(12, 2)}`;
  }

  public static PhoneFormat(phone: string): string {
    if (!phone)
      return '';
    if (phone.length < 10)
      return phone;
    if (phone.length > 10)
      return `(${phone.substr(0, 2)}) ${phone.substr(2, 5)}-${phone.substr(7, 4)}`;
    else
      return `(${phone.substr(0, 2)}) ${phone.substr(2, 4)}-${phone.substr(6, 4)}`;
  }

  public static PriceFormat(price: number) {
    return price === null || price === undefined ? '0,00' :
      new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  }
}
