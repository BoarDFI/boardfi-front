import { generateColumns } from "@/components/CryptoTable/Columns";
import { DataTable } from "@/components/CryptoTable/Table";
import CryptocurrenciesRateCards from "@/components/CryptocurrienciesRate/CryptocurrenciesRateCards";
import { mockCryptos } from "@/constants";

function HomePage() {
  return (
    <>
      <CryptocurrenciesRateCards/>
      <DataTable columns={generateColumns(mockCryptos[0])} data={mockCryptos} />
    </>
  );
}

export default HomePage;
