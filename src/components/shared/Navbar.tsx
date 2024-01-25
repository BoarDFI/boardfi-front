import { logo } from "@/assets/images";
import SearchInput from "./SearchInput";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <span className="text-xl text-white">BoarDFI</span>
      </div>
      <div
        className={cn(
          "flex w-full gap-7 items-center",
          active ? "max-w-[740px]" : "max-w-[600px]"
        )}
      >
        <SearchInput active={active} setActive={setActive} />
        <Button>Connect with your wallet</Button>
      </div>
    </div>
  );
};

export default Navbar;
