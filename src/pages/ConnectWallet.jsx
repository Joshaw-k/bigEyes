import { wallets } from "../utils/wallets";
import { Link } from "react-router-dom";

const ConnectWallet = () => {
  return (
    <>
      <div className="bg-[#FFDCAA] pb-6">
        <h1 className="text-[#F38590] font-titan text-center font-semibold text-xl md:text-2xl lg:text-3xl py-10">
          Wallet Connect
        </h1>
        <div className="px-10 mb-10 py-6 max-w-2xl w-[90%] mx-auto bg-[#A6E8FE] border-2 border-[#5B5B5B] shadow-black rounded-3xl">
          <h3 className="text-[#5B5B5B] font-urbanist font-bold text-lg mb-6">
            Connect to a wallet
          </h3>
          {wallets.map((item, index) => {
            const { icon, title } = item;
            return (
              <Link
                to={`/initialization/${index}`}
                className="flex justify-between px-6 py-3 mb-2 cursor-pointer items-center bg-[#F9C7CC] hover:bg-[#F38590] rounded-full"
                key={index}
              >
                <div className="flex gap-x-5 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#A6E8FE]"></div>
                  <h5 className="text-[#5B5B5B] font-semibold font-urbanist">
                    {title}
                  </h5>
                </div>
                <div className="w-[25px] h-[25px]">
                  <img src={icon} alt="logo.png" className="w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
