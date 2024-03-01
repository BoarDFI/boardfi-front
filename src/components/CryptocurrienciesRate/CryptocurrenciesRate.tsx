import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";
import CryptocurrenciesRateRow from "./CryptocurrenciesRateRow";

const CryptocurrenciesRate = ({
  cryptoCurrenciesRateViews,
  showCodicon,
  showBestResult,
}: {
  cryptoCurrenciesRateViews: ICryptoCurrienciesRateView[];
  showCodicon: boolean;
  showBestResult: boolean;
}) => {
  const halfData = Math.ceil(cryptoCurrenciesRateViews.length / 2);

  return (
    <div className="grid max-sm:grid-cols-1  grid-cols-2 md:gap-4 text-dirty-white">
      <div className="md:border-r md:border-primary">
        {cryptoCurrenciesRateViews
          .slice(0, halfData)
          .map((cryptoCurrenciesRateView, index) => (
            <CryptocurrenciesRateRow
              key={index}
              cryptoCurrienciesRateView={cryptoCurrenciesRateView}
              index={index}
              showCup={showBestResult}
              showCodicon={showCodicon}
              className="md:mr-3"
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
