import InfoIcon from "@/assets/icons/info-icon.svg?react";
import FlameIcon from "@/assets/icons/flame-icon.svg?react";
import NextIcon from "@/assets/icons/next-icon.svg?react";
import CryptocurrenciesRate from "../CryptocurrienciesRate/CryptocurrenciesRate";
import { Link } from "react-router-dom";

const Card = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 grid-flow-col gap-4">
        <div className="row-start row-span-2">
          <h2 className="mx-10 text-2xl mb-2 flex items-center font-bold text-paragraph">
            {title}
            <InfoIcon className="ml-2 cursor-pointer"></InfoIcon>
          </h2>
        </div>
        <div className="row-end row-span-2 flex justify-end items-center">
          <h3 className="flex items-center">
            See More
            <Link to="https://beeg.com/">
              <NextIcon className="ml-1 cursor-pointer"></NextIcon>
            </Link>
          </h3>
        </div>
      </div>
      <div className="card relative border-transparent border-solid border-4 rounded-xl min-h-64 w-full overflow-visible">
        <FlameIcon className="absolute w-34 h-49 top-[-25px] left-[-18px] flex-shrink-0 object-cover" />
        <div className="p-10">
          <CryptocurrenciesRate></CryptocurrenciesRate>
        </div>
      </div>
    </div>
  );
};

export default Card;
