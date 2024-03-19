export type CryptoCurrenciesRateCardViewType = {
  title: string;
  href: string;
  tooltip: string;
  icon: string;
  cryptoCurrenciesRateViews: CryptoCurrenciesRateViewType[];
};

export type CryptoCurrenciesRateViewType = {
  id: number;
  step: number;
  name: string;
  icon: string;
  value: string;
  codicon: boolean;
};
