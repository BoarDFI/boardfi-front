import CodiconFoldDown from "@/assets/icons/codicon_fold-down.svg?react";
import CodiconFoldUp from "@/assets/icons/codicon_fold-up.svg?react";
import SolarCupBold from "@/assets/icons/solar_cup-bold.svg?react";
import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";

const CryptocurrenciesRateRow = ({
  index,
  cryptoCurrienciesRateView,
  showCup,
  showCodicon,
  className,
}: {
  index: number;
  cryptoCurrienciesRateView: ICryptoCurrienciesRateView;
  showCup: boolean;
  showCodicon: boolean;
  className: string;
}) => {
  const { name, icon, codicon, value, id } = cryptoCurrienciesRateView;
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
        {showCodicon && codicon && <CodiconFoldUp />}
        {showCodicon && !codicon && <CodiconFoldDown />}
           
      </div> <div className="items-center"><span className="text-xs  text-right">${value}</span> </div>
    </div>
  );
};

export default CryptocurrenciesRateRow;
