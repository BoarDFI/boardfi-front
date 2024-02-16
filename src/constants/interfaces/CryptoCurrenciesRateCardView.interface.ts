import ICryptoCurrienciesRateView from "./CryptoCurrenciesRateView.interface";

export default interface ICryptoCurrenciesRateCardView {
  title: string;
  href: string;
  icon: string;
  cryptoCurrenciesRateViews: ICryptoCurrienciesRateView[];
  endableBestResult: boolean;
  showCodicon: boolean;
}
