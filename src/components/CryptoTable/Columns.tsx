import { ColumnDef, Row, Column } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export type CryptoTable = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  marketCap: number;
  socialScore: number;
  verified: boolean;
  img: string;
};

export function generateColumns(data: CryptoTable): ColumnDef<CryptoTable>[] {
  const keys = Object.keys(data);
  const defaultHeader =
    (key: string) =>
    ({ column }: { column: Column<CryptoTable, unknown> }) => (
      <Button
        className="bg-transparent hover:bg-transparent hover:shadow-transparent p-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {key.charAt(0).toUpperCase() + key.slice(1)}
        <LuArrowUpDown className="ml-2" size={12} />
      </Button>
    );

  const defaultCell =
    (key: string) =>
    ({ row }: { row: Row<CryptoTable & Record<string, unknown>> }) => (
      <span>{String(row.original[key])}</span>
    );

  return keys.reduce((acc: ColumnDef<CryptoTable>[], key) => {
    if (key === "img" || key === "symbol") {
      return acc;
    }

    const column: ColumnDef<CryptoTable> = {
      accessorKey: key,
      header: defaultHeader(key),
      cell: defaultCell(key),
    };

    switch (key) {
      case "verified":
        column.cell = ({ row }: { row: Row<CryptoTable> }) => (
          <div className="flex items-center gap-2">
            {row.original[key] ? (
              <FaStar fill="yellow" size={18} />
            ) : (
              <FaStar className="opacity-50" size={18} />
            )}
            <span className="text-white">
              {row.original[key] ? "Verified" : "Not Verified"}
            </span>
          </div>
        );
        break;
      case "id":
        column.header = ({
          column,
        }: {
          column: Column<CryptoTable, unknown>;
        }) => (
          <Button
            className="bg-transparent hover:bg-transparent hover:shadow-transparent p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            #
            <LuArrowUpDown className="ml-2" size={12} />
          </Button>
        );
        break;
      case "name":
        column.cell = ({ row }: { row: Row<CryptoTable> }) => (
          <div className="flex items-center gap-2">
            <img src={row.original.img} alt="" className="w-5 h-5" />
            <span>{row.original[key]}</span>
            <span className=" text-accent-gray text-xs">
              {row.original.symbol}
            </span>
          </div>
        );
        break;
      case "volume24h":
      case "marketCap":
      case "price":
        column.cell = ({ row }: { row: Row<CryptoTable> }) => (
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(row.original[key])}
          </span>
        );
        break;
      case "change1h":
      case "change24h":
      case "change7d":
        column.cell = ({ row }: { row: Row<CryptoTable> }) => {
          const amount = row.original[key];
          const formatted = new Intl.NumberFormat("en-US", {
            style: "percent",
            signDisplay: "always",
            minimumFractionDigits: 2,
          }).format(amount);

          return (
            <span
              className={
                row.original[key] < 0 ? "text-red-500" : "text-green-500"
              }
            >
              {formatted}
            </span>
          );
        };
        break;
    }

    acc.push(column);
    return acc;
  }, []);
}
