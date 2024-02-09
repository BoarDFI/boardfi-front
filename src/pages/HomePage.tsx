import { generateColumns } from "@/components/CryptoTable/Columns";
import { DataTable } from "@/components/CryptoTable/Table";
import Card from "@/components/shared/Card";
import { mockCryptos } from "@/constants";

function HomePage() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <div className="row-span-1 h-12 mr-5">
            <Card title="Hot Cryptos" href=""></Card>
          </div>
          <div className="row-span-1 h-12 ml-5">
            <Card title="Recently added" href=""></Card>
          </div>
        </div>
      </div>

      <div className="flex mb-4">
        {/* <DataTable columns={generateColumns(mockCryptos[0])} data={mockCryptos} /> */}
      </div>
    </>
  );
}

export default HomePage;
