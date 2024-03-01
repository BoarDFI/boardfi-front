import CryptoCurrenciesRateCardView from "@/constants/models/CryptoCurrenciesRateCardView.model";
import Card from "@/components/shared/Card";
import IconType from "@/constants/icon-type";
import { CryptoCurrenciesService } from "./helper";
import ICryptoCurrienciesRateView from "@/constants/interfaces/CryptoCurrenciesRateView.interface";
import { useEffect, useState } from "react";

const cryptoService = new CryptoCurrenciesService();
const CryptocurrenciesRateCards: React.FC = () => {
    const [recentlyAdded, setRecentlyAdded] = useState<ICryptoCurrienciesRateView[]>([]);
    const [hotCryptos, setHotCryptos] = useState<ICryptoCurrienciesRateView[]>([]);
  
    useEffect(() => {
      cryptoService.getRecentlyAdded(10).subscribe(data => setRecentlyAdded(data));
      cryptoService.getHotCryptos(10).subscribe(data => setHotCryptos(data));
    }, []);
    
    return (
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mb-20">
        <div className="row-span-1 mr-5 max-md:mr-0">
          <Card
            cryptoCurrenciesRateCardView={
              new CryptoCurrenciesRateCardView(
                "Hot Cryptos",
                "",
                IconType.FLAME,
                recentlyAdded,
                true,
                true
              )
            }
            showBestResult={true}
          ></Card>
        </div>
        <div className="row-span-1 ml-5 max-md:ml-0 max-md:mt-14">
          <Card
            cryptoCurrenciesRateCardView={
              new CryptoCurrenciesRateCardView(
                "Recently added",
                "",
                IconType.HOURGLASS,
                hotCryptos
              )
            }
            showBestResult={false}
          ></Card>
        </div>
      </div>
    );
  };
  
  export default CryptocurrenciesRateCards;