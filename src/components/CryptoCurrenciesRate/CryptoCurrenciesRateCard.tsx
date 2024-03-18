import { useEffect, useState } from "react";
import Card from "@/components/shared/Card";
import { CryptoCurrenciesRateViewType } from "@/types/CryptoCurrenciesRate.type";
import { IconEnum } from "@/enums";
import { mockCryptoCurrenciesRateViews } from "@/constants";

const CryptocurrenciesRateCards = () => {
  const [recentlyAdded, setRecentlyAdded] = useState<
    CryptoCurrenciesRateViewType[]
  >([]);

  useEffect(() => {
    setRecentlyAdded(mockCryptoCurrenciesRateViews);
  }, []);

  const renderCard = (
    title: string,
    href: string,
    icon: IconEnum,
    cryptoCurrenciesRateViews: CryptoCurrenciesRateViewType[]
  ) => (
    <div
      className={`row-span-1 ${icon === IconEnum.FLAME ? "mr-5 max-md:mr-0" : "ml-5 max-md:ml-0 max-md:mt-14"}`}
    >
      <Card
        cryptoCurrenciesRateCardView={{
          title,
          href,
          icon,
          cryptoCurrenciesRateViews,
        }}
        showBestResult={true}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mb-20">
      {renderCard("Hot Cryptos", "/", IconEnum.FLAME, recentlyAdded)}
      {renderCard("Hot Cryptos", "/", IconEnum.HOURGLASS, recentlyAdded)}
    </div>
  );
};

export default CryptocurrenciesRateCards;
