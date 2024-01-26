import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

import SearchIcon from "@/assets/icons/search-icon.svg?react";
import XIcon from "@/assets/icons/x-icon.svg?react";
import { solana } from "@/assets/images";

const SearchInput = ({
  active,
  setActive,
  data,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
  data: { id: number; name: string; symbol: string }[];
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustDropdownHeight = () => {
    if (dropdownRef.current && containerRef.current) {
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;
      const totalHeight = dropdownHeight + containerHeight;
      const styleElement = document.createElement("style");
      styleElement.textContent = `
        .custom-before-height::before {
          height: ${totalHeight + 16}px;
        }

      `;
      document.head.append(styleElement);
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    adjustDropdownHeight();

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [active, setActive]);
  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={cn(
          "flex w-full items-center border border-primary rounded",
          active &&
            "z-10 relative before:absolute before:w-full before:h-full before:top-0 before:bg-gradient-to-t before:from-primary before:to-secondary before:-z-10 before:rounded before:shadow-primary border-none custom-before-height"
        )}
      >
        <Input
          ref={inputRef}
          onFocus={() => setActive(true)}
          className={cn(
            "rounded-r-none border-none",
            active && "placeholder:text-accent-gray pl-10"
          )}
          onInput={() => setActive(true)}
          placeholder="Find your favourite crypto"
        />
        <Button
          className={cn(
            "rounded-none px-4 transition-none",
            active &&
              "bg-transparent hover:bg-transparent hover:shadow-transparent"
          )}
          onClick={() => setActive(!active)}
        >
          {active ? <XIcon /> : <SearchIcon className="fill-white" />}
        </Button>

        {active && (
          <>
            <div ref={dropdownRef} className="absolute top-full w-full px-4">
              {data.map((item) => (
                <div key={item.id} className="">
                  <div className="flex items-center gap-2 mt-2 pb-2 w-full">
                    <img src={solana} alt={item.name} />
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-end gap-2">
                        <p className="text-sm text-white">{item.name}</p>
                        <p className="text-accent-gray text-xs">
                          {item.symbol}
                        </p>
                      </div>
                      <span className="text-white">$83980123.1231</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <SearchIcon className="left-2 absolute fill-accent-gray" />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
