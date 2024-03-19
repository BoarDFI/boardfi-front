import CodiconFoldDown from "@/assets/icons/codicon_fold-down.svg?react";
import CodiconFoldUp from "@/assets/icons/codicon_fold-up.svg?react";
import SolarCupBold from "@/assets/icons/solar_cup-bold.svg?react";
import { CryptoCurrenciesRateViewType } from "@/lib/types/CryptoCurrenciesRate.type";

type Props = {
  index: number;
  cryptoCurrenciesRateView: CryptoCurrenciesRateViewType;
  showCup: boolean;
  className?: string;
};

const CryptocurrenciesRateRow = ({
  index,
  cryptoCurrenciesRateView,
  showCup,
  className,
}: Props) => {
  const { name, icon, codicon, value, id } = cryptoCurrenciesRateView;
  return (
    <div key={index} className={`mb-6 flex justify-between ${className}`}>
      <div className="flex items-center">
        <span className="text-xs mr-2">#{id}</span>
        <div className="relative flex-shrink-0">
          <img
            src={icon}
            className="w-6 h-6 rounded-sm overflow-hidden mr-1"
            alt={`${name} icon`}
          />
          {index === 0 && showCup && (
            <SolarCupBold className="absolute -top-1 right-1 rounded-sm overflow-hidden" />
          )}
        </div>

        <span className="text-xs mr-1 flex-shrink">{name}</span>
        {codicon ? <CodiconFoldUp /> : <CodiconFoldDown />}
      </div>
      <div className="items-center">
        <span className="text-xs  text-right">${value}</span>{" "}
      </div>
    </div>
  );
};

export default CryptocurrenciesRateRow;
