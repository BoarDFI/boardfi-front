import { logo } from "@/assets/images";
import SearchInput from "./SearchInput";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { mockData, routes } from "@/constants";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuAnimation = useSpring({
    transform:
      isMobile && isMobileMenuOpen ? "translateY(0%)" : "translateY(-100%)",
    config: config.slow,
  });

  const buttonAnimation = useSpring({
    rotate: isMobileMenuOpen ? 90 : 0,
  });

  const AnimatedButton = animated(Button);

  const renderMenu = () => (
    <animated.div
      style={isMobile ? menuAnimation : {}}
      className={cn(
        "flex gap-6",
        isMobile &&
          "flex-col fixed top-0 w-full px-3 gap-3 right-0 h-full overflow-hidden bg-gradient-to-t from-primary to-secondary p-4"
      )}
    >
      {isMobile && (
        <div
          className={cn(
            "flex items-center gap-2 ",
            isMobileMenuOpen && "relative z-40 border-b-primary pb-4 border-b"
          )}
        >
          <img src={logo} alt="logo" />
          <span className="text-xl text-white">BoarDFI</span>
        </div>
      )}
      <div
        className={cn(
          "flex gap-8 items-center",
          isMobile &&
            "gap-1 flex-col absolute max-[480px]:top-[15%] top-[12%] left-0  container"
        )}
      >
        {routes.map((item, index) => (
          <Link
            key={index}
            className={cn(
              "block py-2 transition-all w-full ",
              isMobile &&
                "hover:bg-button hover:pl-4 hover:rounded hover:text-white hover:shadow-primary"
            )}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        {isMobile && <Button className="w-full mt-4">Connect wallet</Button>}
      </div>
    </animated.div>
  );

  return (
    <>
      <div className="flex w-full justify-between items-center py-6">
        <div className="flex items-center gap-10">
          <div className={cn("flex items-center gap-2")}>
            <img src={logo} alt="logo" />
            <span className="text-xl text-white">BoarDFI</span>
          </div>
          {renderMenu()}
        </div>
        <div
          className={cn(
            "flex w-full gap-7 items-center max-w-[560px]",
            isMobile && "justify-end max-w-full gap-2"
          )}
        >
          {!isMobile && (
            <SearchInput
              active={active}
              setActive={setActive}
              data={mockData}
            />
          )}
          <AnimatedButton
            className={cn(
              "relative z-40",
              isMobile &&
                "bg-transparent hover:bg-transparent hover:shadow-transparent transition-none"
            )}
            style={{
              transform: buttonAnimation.rotate.to(
                (rotate) => `rotate(${rotate}deg)`
              ),
            }}
            onClick={() => isMobile && setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobile ? (
              "Connect to wallet"
            ) : isMobileMenuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </AnimatedButton>
        </div>
      </div>
      {isMobile && (
        <SearchInput active={active} setActive={setActive} data={mockData} />
      )}
    </>
  );
};

export default Navbar;
