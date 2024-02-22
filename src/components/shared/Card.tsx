import InfoIcon from "@/assets/icons/info-icon.svg?react";
import NextIcon from "@/assets/icons/next-icon.svg?react";
import CryptocurrenciesRate from "../CryptocurrienciesRate/CryptocurrenciesRate";
import { Link } from "react-router-dom";
import ICryptoCurrenciesRateCardView from "@/constants/interfaces/CryptoCurrenciesRateCardView.interface";
import Icon from "./Icon";

const Card = ({
  cryptoCurrenciesRateCardView,
}: {
  cryptoCurrenciesRateCardView: ICryptoCurrenciesRateCardView;
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-4 grid-flow-col auto-cols-max gap-4">
        <div className="row-start flex col-span-3">
          <h2 className="mx-10 text-2xl mb-2 flex items-center font-bold text-paragraph">
            {cryptoCurrenciesRateCardView.title}
            <InfoIcon className="ml-2 cursor-pointer"></InfoIcon>
          </h2>
        </div>
        <div className="row-end col-span-1 flex justify-end items-center">
          <h3 className="flex items-center">
            See More
            <Link to={cryptoCurrenciesRateCardView.href}>
              <NextIcon className="ml-1 cursor-pointer"></NextIcon>
            </Link>
          </h3>
        </div>
      </div>
      <div className="card relative border-transparent border-solid border-4 rounded-xl min-h-64 w-full overflow-visible">
        <Icon
          type={cryptoCurrenciesRateCardView.icon}
          className="absolute w-34 h-49 top-[-32px] left-[-18px] flex-shrink-0 object-cover"
        />
        <div className="p-10 pb-2">
          <CryptocurrenciesRate
            cryptoCurrenciesRateViews={
              cryptoCurrenciesRateCardView.cryptoCurrenciesRateViews
            }
            showCodicon={cryptoCurrenciesRateCardView.showCodicon}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
