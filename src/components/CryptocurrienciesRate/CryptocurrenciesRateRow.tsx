import CodiconFoldDown from "@/assets/icons/codicon_fold-down.svg?react";
import CodiconFoldUp from "@/assets/icons/codicon_fold-up.svg?react";
import SolarCupBold from "@/assets/icons/solar_cup-bold.svg?react";
import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";

interface CryptocurrenciesRateRowProps {
  index: number;
  cryptoCurrienciesRateView: ICryptoCurrienciesRateView;
  showCup: boolean;
  showCodicon: boolean;
  className: string;
}

const CryptocurrenciesRateRow: React.FC<CryptocurrenciesRateRowProps> = ({
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
  const { name, icon, codicon, value } = cryptoCurrienciesRateView;
  return (
    <div key={index} className={`mb-6 flex justify-between ${className}`}>
      <div className="flex items-center">
        <span className="mr-4">#{index + 1}</span>
        <div className="relative">
          <img
            src={icon}
            className="w-6 h-6 rounded-sm overflow-hidden mr-3"
            alt={`${name} icon`}
          />
          {index === 0 && showCup && (
            <SolarCupBold className="absolute -top-1 right-1 rounded-sm overflow-hidden" />
          )}
        </div>

        <span className="mr-2">{name}</span>
        {showCodicon && codicon && <CodiconFoldUp />}
        {showCodicon && !codicon && <CodiconFoldDown />}
      </div>
      <span className="text-right">${value}</span>
    </div>
  );
};

export default CryptocurrenciesRateRow;
