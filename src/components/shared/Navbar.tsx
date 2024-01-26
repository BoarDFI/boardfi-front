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
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <span className="text-xl text-white">BoarDFI</span>
        </div>
        <div className="flex gap-3">
          {routes.map((item) => (
            <p
              className="text-white hover:text-secondary transition-all"
              key={item.name}
            >
              <Link to={item.path}>{item.name}</Link>
            </p>
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
