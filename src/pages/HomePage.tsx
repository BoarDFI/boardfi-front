import CryptocurrenciesRateCards from "@/components/CryptoCurrenciesRate/CryptoCurrenciesRateCard";
import { generateColumns } from "@/components/CryptoTable/Columns";
import { DataTable } from "@/components/CryptoTable/Table";
import { mockCryptos } from "@/constants";

function HomePage() {
  return (
    <>
      <CryptocurrenciesRateCards />
      <DataTable columns={generateColumns(mockCryptos[0])} data={mockCryptos} />
    </>
  );
}

export default HomePage;
