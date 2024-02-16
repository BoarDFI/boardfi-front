import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";
import CryptocurrenciesRateRow from "./CryptocurrenciesRateRow";

const CryptocurrenciesRate = ({
  cryptoCurrenciesRateViews,
  showCodicon,
}: {
  cryptoCurrenciesRateViews: ICryptoCurrienciesRateView[];
  showCodicon: boolean;
}) => {
  const halfData = Math.ceil(cryptoCurrenciesRateViews.length / 2);

  return (
    <div className="grid grid-cols-2 gap-4 text-dirty-white">
      <div className="border-r border-primary">
        {cryptoCurrenciesRateViews
          .slice(0, halfData)
          .map((cryptoCurrenciesRateView, index) => (
            <CryptocurrenciesRateRow
              key={index}
              cryptoCurrienciesRateView={cryptoCurrenciesRateView}
              index={index}
              showCup={true}
              showCodicon={showCodicon}
              className="mr-5"
            />
          ))}
      </div>
      <div>
        {cryptoCurrenciesRateViews
          .slice(halfData)
          .map((cryptoCurrenciesRateView, index) => (
            <CryptocurrenciesRateRow
              key={index}
              cryptoCurrienciesRateView={cryptoCurrenciesRateView}
              index={index}
              showCup={false}
              showCodicon={showCodicon}
              className=""
            />
          ))}
      </div>
    </div>
  );
};
export default CryptocurrenciesRate;
