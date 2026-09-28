import { config } from '../config';

// Formats the ENDURE Premium prices from `config.pricing` for display.

type Lang = 'en' | 'de';

export interface Pricing {
  currency: string;
  monthly: number;
  annual: number;
  /** "$7.99" / "8,99 €" */
  monthlyLabel: string;
  annualLabel: string;
  /** Annual price spread over twelve months, rounded down to the cent. */
  annualPerMonthLabel: string;
}

export function getPricing(lang: Lang): Pricing {
  const p = config.pricing[lang];
  const fmt = new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', { style: 'currency', currency: p.currency });
  return {
    currency: p.currency,
    monthly: p.monthly,
    annual: p.annual,
    monthlyLabel: fmt.format(p.monthly),
    annualLabel: fmt.format(p.annual),
    annualPerMonthLabel: fmt.format(Math.floor((p.annual / 12) * 100) / 100),
  };
}

/** Fills `{monthly}`, `{annual}` and `{annualPerMonth}` in a translation string. */
export function withPrices(text: string, lang: Lang): string {
  const p = getPricing(lang);
  return text
    .replaceAll('{monthly}', p.monthlyLabel)
    .replaceAll('{annual}', p.annualLabel)
    .replaceAll('{annualPerMonth}', p.annualPerMonthLabel);
}
