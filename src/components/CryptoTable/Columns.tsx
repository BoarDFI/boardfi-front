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
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  );

const formatPercentage = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "percent",
    signDisplay: "always",
    minimumFractionDigits: 2,
  }).format(value);

const generateDefaultHeader =
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

export function generateColumns(data: CryptoTable): ColumnDef<CryptoTable>[] {
  const keys = Object.keys(data);

  return keys.reduce((acc: ColumnDef<CryptoTable>[], key) => {
    if (key === "img" || key === "symbol") return acc;

    const column: ColumnDef<CryptoTable> = {
      accessorKey: key,
      header: generateDefaultHeader(key),
      cell: ({ row }: { row: Row<CryptoTable> }) => {
        const value = row.original[key as keyof CryptoTable];
        return <span>{String(value)}</span>;
      },
    };

    switch (key) {
      case "verified":
        column.cell = ({ row }) => (
          <div className="flex items-center gap-2">
            <FaStar fill={row.original[key] ? "yellow" : "gray"} size={18} />
            <span className="text-white">
              {row.original[key] ? "Verified" : "Not Verified"}
            </span>
          </div>
        );
        break;
      case "id":
        column.header = generateDefaultHeader("#");
        break;
      case "name":
        column.cell = ({ row }) => (
          <div className="flex items-center gap-2">
            <img src={row.original.img} alt="" className="w-5 h-5" />
            <span>{row.original.name}</span>
            <span className="text-accent-gray text-xs">
              {row.original.symbol}
            </span>
          </div>
        );
        break;
      case "volume24h":
      case "marketCap":
      case "price":
        column.cell = ({ row }) => (
          <span>{formatCurrency(row.original[key])}</span>
        );
        break;
      case "change1h":
      case "change24h":
      case "change7d":
        column.cell = ({ row }) => {
          const className =
            row.original[key] < 0 ? "text-red-500" : "text-green-500";
          return (
            <span className={className}>
              {formatPercentage(row.original[key])}
            </span>
          );
        };
        break;
    }

    acc.push(column);
    return acc;
  }, []);
}
