import InfoIcon from "@/assets/icons/info-icon.svg?react";
import NextIcon from "@/assets/icons/next-icon.svg?react";

import CryptocurrenciesRate from "../CryptoCurrenciesRate/CryptoCurrenciesRate";
import { Link } from "react-router-dom";
import { CryptoCurrenciesRateCardViewType } from "@/types/CryptoCurrenciesRate.type";

import IconCard from "./IconCard";

type Props = {
  cryptoCurrenciesRateCardView: CryptoCurrenciesRateCardViewType;
  showBestResult: boolean;
};

const Card = ({ cryptoCurrenciesRateCardView, showBestResult }: Props) => {
  const { icon, title, href, cryptoCurrenciesRateViews } =
    cryptoCurrenciesRateCardView;

  return (
    <div className="">
      <div className="grid grid-cols-2 grid-flow-col auto-cols-max gap-4">
        <div className="row-start flex col-span-3">
          <h2 className="mx-10 text-2xl mb-2 flex items-center font-bold text-paragraph">
            {title}
            <InfoIcon className="ml-2 cursor-pointer"></InfoIcon>
          </h2>
        </div>
        <div className="row-end col-span-1 flex justify-end items-center">
          <h3 className="flex items-center">
            See More
            <Link to={href}>
              <NextIcon className="ml-1 cursor-pointer"></NextIcon>
            </Link>
          </h3>
        </div>
      </div>
      <div className="card relative border-transparent border-solid border-4 rounded-xl min-h-64 w-full overflow-visible">
        <IconCard
          type={icon}
          className="absolute w-34 h-49 top-[-32px] left-[-18px] flex-shrink-0 object-cover"
        />
        <div className="p-4 pt-8 pb-2">
          <CryptocurrenciesRate
            cryptoCurrenciesRateViews={cryptoCurrenciesRateViews}
            showBestResult={showBestResult}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
