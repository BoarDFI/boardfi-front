import { generateColumns } from "@/components/CryptoTable/Columns";
import { DataTable } from "@/components/CryptoTable/Table";
import Card from "@/components/shared/Card";
import { mockCryptoCurrenciesRateViews, mockCryptos } from "@/constants";
import IconType from "@/constants/icon-type";
import CryptoCurrenciesRateCardView from "@/constants/models/CryptoCurrenciesRateCardView.model";

function HomePage() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <div className="row-span-1 h-12 mr-5">
            <Card
              cryptoCurrenciesRateCardView={
                new CryptoCurrenciesRateCardView(
                  "Hot Cryptos",
                  "",
                  IconType.FLAME,
                  mockCryptoCurrenciesRateViews,
                  true, 
                  true
                )
              }
            ></Card>
          </div>
          <div className="row-span-1 h-12 ml-5">
            <Card
              cryptoCurrenciesRateCardView={
                new CryptoCurrenciesRateCardView(
                  "Recently added",
                  "",
                  IconType.HOURGLASS,
                  mockCryptoCurrenciesRateViews
                )
              }
            ></Card>
          </div>
        </div>
        <div className="flex items-center justify-center mb-4">
          {/* TODO  */}
          {/* <DataTable
            columns={generateColumns(mockCryptos[0])}
            data={mockCryptos}
          /> */}
        </div>{" "}
      </div>
    </>
  );
}

export default HomePage;
