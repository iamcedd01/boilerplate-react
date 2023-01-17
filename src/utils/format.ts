enum Currencies {
  USD = 'USD',
  PHP = 'PHP',
}

interface ILocaleOptions {
  locale: 'en-US';
  currency: Currencies;
}

export const toLocaleString = (
  value: string | number,
  options: ILocaleOptions = {
    locale: 'en-US',
    currency: Currencies.PHP,
  },
): string =>
  new Intl.NumberFormat(options.locale || 'en-US', { style: 'currency', currency: options.currency }).format(
    Number(value),
  );
