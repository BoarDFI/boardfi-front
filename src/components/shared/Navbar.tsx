import { logo } from "@/assets/images";
import SearchInput from "./SearchInput";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { mockData, routes } from "@/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex w-full justify-between items-center py-6">
      <div className={cn("flex items-center gap-10", active && " gap-3")}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <span className="text-xl text-white">BoarDFI</span>
        </div>
        <div className="flex gap-6">
          {routes.map((item) => (
            <Link
              className="hover:text-secondary transition-all"
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "flex w-full gap-7 items-center",
          active ? "max-w-[740px]" : "max-w-[600px]"
        )}
      >
        <SearchInput active={active} setActive={setActive} data={mockData} />
        <Button>Connect with your wallet</Button>
      </div>
    </div>
  );
};

export default Navbar;
