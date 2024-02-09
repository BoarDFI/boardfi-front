import CodiconFoldDown from "@/assets/icons/codicon_fold-down.svg?react";
import CodiconFoldUp from "@/assets/icons/codicon_fold-up.svg?react";
import SolarCupBold from "@/assets/icons/solar_cup-bold.svg?react";

const CryptocurrenciesRate = () => {
  const cryptocurrencies = [
    {
      name: "Bitcoin",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      value: "43,808,489,460",
      codicon: true,
    },
    {
      name: "Solana",
      icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Bitcoin",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Solona",
      icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Bitcoin",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      value: "43,808,489,460",
      codicon: true,
    },
    {
      name: "Solana",
      icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Bitcoin",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Solana",
      icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      value: "43,808,489,460",
      codicon: true,
    },
    {
      name: "Bitcoin",
      icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      value: "43,808,489,460",
      codicon: false,
    },
    {
      name: "Solana",
      icon: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      value: "43,808,489,460",
      codicon: true,
    },
  ];
  const polowaDanych = Math.ceil(cryptocurrencies.length / 2);

  return (
    <div className="grid grid-cols-2 gap-4 text-dirty-white">
      <div className="border-r border-primary">
        {cryptocurrencies
          .slice(0, polowaDanych)
          .map(({ name, icon, value, codicon }, index) => (
            <div key={index} className="mb-6 flex justify-between mr-5">
              <div className="flex items-center">
                <span className="mr-4">#{index + 1}</span>
                <div className="relative">
                  <img
                    src={icon}
                    className="w-6 h-6 rounded-sm overflow-hidden mr-3"
                    alt={`${name} icon`}
                  />
                  {index === 0 && (
                    <SolarCupBold className="absolute -top-1 right-1 rounded-sm overflow-hidden"></SolarCupBold>
                  )}
                </div>

                <span className="mr-1">{name}</span>
                {codicon ? (
                  <CodiconFoldUp></CodiconFoldUp>
                ) : (
                  <CodiconFoldDown></CodiconFoldDown>
                )}
              </div>
              <span className="text-right">${value}</span>
            </div>
          ))}
      </div>
      <div>
        {cryptocurrencies
          .slice(polowaDanych)
          .map(({ name, icon, value }, index) => (
            <div
              key={index + polowaDanych}
              className="mb-5 flex justify-between"
            >
              <span>#{index + 1}</span>
              <img
                src={icon}
                className="w-6 h-6 rounded-sm overflow-hidden"
                alt={`${name} icon`}
              />
              <span>{name}</span>
              <span className="text-right">${value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CryptocurrenciesRate;
