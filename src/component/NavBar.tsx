import { ethers } from "ethers";
import { useState } from "react";
import Logo from "../assets/mrfox-logo-y.png";

const NavBar = () => {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  const [open, setOpen] = useState(false);

  const handleAddChain = async () => {
    try {
      await provider.send("wallet_addEthereumChain", [
        {
          chainId: "0x2bd",
          chainName: "MrFoxChain",
          rpcUrls: ["https://rpc.mrfoxchain.com"],
          nativeCurrency: {
            name: "MrFox Coin",
            symbol: "MrFOX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://exp.mrfoxchain.com"],
        },
      ]);
    } catch (err) {}
  };

  return (
    <header className="navbar border-b shadow-md">
      <nav className="py-4 px-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={Logo} className="w-48" alt="jfin_chain" />
            <ul className="sm:inline-flex gap-10 ml-12 hidden">
              <li>
                <a href="https://exp.mrfoxchain.com">Explorer</a>
              </li>
              <li>
                <a href="https://staking.mrfoxchain.com">Staking</a>
              </li>
              <li>
                <a href="https://bridge.mrfoxchain.com">Bridge</a>
              </li>
            </ul>
          </div>
          {provider && (
            <div className="hidden sm:block">
              <button
                onClick={handleAddChain}
                className="bg-P100 hover:bg-P100/75 text-SL100 font-bold py-2 px-4 rounded-full"
              >
                Add MrFoxCHAIN
              </button>
            </div>
          )}
          <div className="flex lg:hidden">
            <button onClick={() => setOpen(!open)}>
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div>
            <ul className="ml-4 mt-5">
              <li>
                <a href="https://exp.mrfoxchain.com">Explore</a>
              </li>
              <li>
                <a href="https://staking.mrfoxchain.com">Staking</a>
              </li>
              <li>
                <a href="https://bridge.mrfoxchain.com">Bridge</a>
              </li>
            </ul>
            {provider && (
              <div className="text-center mt-5">
                <button
                  onClick={handleAddChain}
                  className="bg-P100 hover:bg-P100/75 text-SL100 font-bold py-2 px-4 rounded-full"
                >
                  Add MrFoxCHAIN
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
