import ICryptoCurrienciesRateView from "../interfaces/CryptoCurrenciesRateView.interface";

export default class CryptoCurrenciesRateCardView {
  title: string;
  href: string;
  icon: string;
  cryptoCurrenciesRateViews: ICryptoCurrienciesRateView[];
  endableBestResult: boolean;
  showCodicon: boolean;

  constructor(
    title: string,
    href: string,
    icon: string,
    cryptoCurrenciesRateViews: ICryptoCurrienciesRateView[],
    enableBestResult: boolean = false,
    showCodicon: boolean = false
  ) {
    this.title = title;
    this.href = href;
    this.icon = icon;
    this.cryptoCurrenciesRateViews = cryptoCurrenciesRateViews;
    this.endableBestResult = enableBestResult;
    this.showCodicon = showCodicon;
  }
}
