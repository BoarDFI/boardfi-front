export type CryptoCurrenciesRateCardViewType = {
  title: string;
  href: string;
  icon: string;
  cryptoCurrenciesRateViews: CryptoCurrenciesRateViewType[];
  enableBestResult: boolean;
  showCodicon: boolean;
};

export type CryptoCurrenciesRateViewType = {
  id: number;
  step: number;
  name: string;
  icon: string;
  value: string;
  codicon: boolean;
};
