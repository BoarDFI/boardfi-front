import Card from "@/components/shared/Card";

import { useEffect, useState } from "react";
import { CryptoCurrenciesRateViewType } from "@/types/CryptoCurrenciesRate.type";

import { IconEnum } from "@/enums";
import { mockCryptoCurrenciesRateViews } from "@/constants";

const CryptocurrenciesRateCards: React.FC = () => {
  const [recentlyAdded, setRecentlyAdded] = useState<
    CryptoCurrenciesRateViewType[]
  >([]);

  useEffect(() => {
    setRecentlyAdded(mockCryptoCurrenciesRateViews);
  }, []);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mb-20">
      <div className="row-span-1 mr-5 max-md:mr-0">
        <Card
          cryptoCurrenciesRateCardView={{
            title: "Hot Cryptos",
            href: "",
            icon: IconEnum.FLAME,
            cryptoCurrenciesRateViews: recentlyAdded,
            enableBestResult: true,
            showCodicon: true,
          }}
          showBestResult={true}
        ></Card>
      </div>
      <div className="row-span-1 ml-5 max-md:ml-0 max-md:mt-14">
        <Card
          cryptoCurrenciesRateCardView={{
            title: "Hot Cryptos",
            href: "",
            icon: IconEnum.HOURGLASS,
            cryptoCurrenciesRateViews: recentlyAdded,
            enableBestResult: true,
            showCodicon: true,
          }}
          showBestResult={true}
        ></Card>
      </div>
    </div>
  );
};

export default CryptocurrenciesRateCards;
