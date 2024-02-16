import ICryptoCurrienciesRateView from "../interfaces/CryptoCurrenciesRateView.interface";

export default class CryptoCurrienciesRateView implements ICryptoCurrienciesRateView{
  id: number;
  step: number;
  name: string;
  icon: string;
  value: string;
  codicon: boolean;

  constructor(
    id: number,
    step: number,
    name: string,
    icon: string,
    value: string,
    codicon: boolean
  ) {
    this.id = id;
    this.step = step;
    this.name = name;
    this.icon = icon;
    this.value = value;
    this.codicon = codicon;
  }
}
