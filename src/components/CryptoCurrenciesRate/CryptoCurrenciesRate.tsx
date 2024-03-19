import { CryptoCurrenciesRateViewType } from "@/lib/types/CryptoCurrenciesRate.type";
import CryptocurrenciesRateRow from "./CryptoCurrenciesRow";

type Props = {
  cryptoCurrenciesRateViews: CryptoCurrenciesRateViewType[];
  showBestResult: boolean;
};

const renderRows = (views: CryptoCurrenciesRateViewType[], showCup: boolean) =>
  views.map((view, index) => (
    <CryptocurrenciesRateRow
      key={view.id}
      cryptoCurrenciesRateView={view}
      index={index}
      showCup={showCup}
      className={showCup ? "md:mr-3" : ""}
    />
  ));

const CryptocurrenciesRate = ({
  cryptoCurrenciesRateViews,
  showBestResult,
}: Props) => {
  const splitIndex = Math.ceil(cryptoCurrenciesRateViews.length / 2);

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-2 md:gap-4 text-dirty-white">
      <div className="md:border-r md:border-primary">
        {renderRows(
          cryptoCurrenciesRateViews.slice(0, splitIndex),
          showBestResult
        )}
      </div>
      <div>
        {renderRows(cryptoCurrenciesRateViews.slice(splitIndex), false)}
      </div>
    </div>
  );
};
export default CryptocurrenciesRate;
