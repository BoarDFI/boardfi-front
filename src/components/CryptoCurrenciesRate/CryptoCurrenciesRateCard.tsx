import { useEffect, useState } from "react";
import Card from "@/components/shared/Card";
import { CryptoCurrenciesRateViewType } from "@/lib/types/CryptoCurrenciesRate.type";
import { IconEnum } from "@/lib/enums";
import { mockCryptoCurrenciesRateViews } from "@/lib/constants";

const renderCard = (
  title: string,
  href: string,
  icon: IconEnum,
  cryptoCurrenciesRateViews: CryptoCurrenciesRateViewType[],
  tooltip: string
) => (
  <div
    className={`row-span-1 ${icon === IconEnum.FLAME ? "mr-5 max-md:mr-0" : "ml-5 max-md:ml-0 max-md:mt-14"}`}
  >
    <Card
      cryptoCurrenciesRateCardView={{
        title,
        href,
        icon,
        tooltip,
        cryptoCurrenciesRateViews,
      }}
      showBestResult={true}
    />
  </div>
);

const CryptocurrenciesRateCards = () => {
  const [recentlyAdded, setRecentlyAdded] = useState<
    CryptoCurrenciesRateViewType[]
  >([]);

  useEffect(() => {
    setRecentlyAdded(mockCryptoCurrenciesRateViews);
  }, []);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mb-20">
      {renderCard(
        "Hot Cryptos",
        "/",
        IconEnum.FLAME,
        recentlyAdded,
        "Top visited pairs in last 24 hours"
      )}
      {renderCard(
        "Recently Added",
        "/",
        IconEnum.HOURGLASS,
        recentlyAdded,
        "Recently added cryptos in last month"
      )}
    </div>
  );
};

export default CryptocurrenciesRateCards;
