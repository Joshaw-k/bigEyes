import { Link } from "react-router-dom";
import return_paw from "../assets/returns-paw.svg";
import arrow from "../assets/arrow.svg";
import star_col from "../assets/star-col.webp";
import star_col_2 from "../assets/star-col-2.webp";
import star_2 from "../assets/stars-2.webp";
import coin_5 from "../assets/coin-5.webp";
import coin_6 from "../assets/coin-6.webp";
import chat_1 from "../assets/chat-bubble-2-upside-down.svg";
import chat_2 from "../assets/chat-bubble-2.svg";
const Returns = () => {
  return (
    <div className="bg-[#DDD1E4] py-12 px-3">
      <div className="bg-[#FFFEF5] w-[90%] max-w-[900px] py-10 m-auto border-4 border-[#5B5B5B] rounded-[3.5rem] shadow-black shadow">
        <div className="w-[90%] m-auto divide-y-2">
          <div className="flex flex-col gap-y-5 pb-24 pt-10 relative">
            <h1 className="relative font-titan font-bold text-[2.5rem] max-w-xs md:max-w-lg m-auto leading-10 text-center">
              Returns Calculator
              <div className="absolute md:hidden -top-8 left-0 w-50 h-auto">
                <img src={star_2} alt="" className="w-full" />
              </div>
            </h1>
            <div className="flex flex-col gap-y-2 font-urbanist md:flex-row gap-x-2 m-auto md:justify-between items-center ">
              <p className="text-[#F38590] font-semibold text-center">
                Enter how much big you own in the textbox below or
              </p>
              <Link
                to="/connectwallet"
                className="bg-[#F38590] w-[50%] md:w-auto m-auto lg:m-0 text-center text-sm py-1 md:px-5 font-bold text-white rounded-full border-4 border-[#F9C7CC] transition hover:text-black hover:bg-[#F9C7CC] duration-300 ease-in"
              >
                Claim Big Eyes
              </Link>
            </div>
            <div className="flex flex-col gap-y-4 lg:mt-10 items-center relative">
              <div className="bg-[#B9FFF6] font-urbanist pl-5 border-4 border-black w-[60%] py-2 rounded-xl">
                <p className="font-semibold">$BIG: 0</p>
              </div>
              <div className="bg-[#B9FFF6] border-4 border-black w-[80%] z-10 py-3 md:py-6 rounded-3xl">
                <h1 className="text-5xl font-titan font-bold text-center">
                  USD: $0.00
                </h1>
              </div>
              <div className="absolute top-10 right-0 md:right-6 w-12 md:w-16 lg:w-20 -rotate-[50deg] h-auto">
                <img src={coin_5} alt="" className="w-full" />
              </div>
              <div className="absolute bottom-0 left-0 md:bottom-5 w-12 md:w-16 lg:w-20 z-20 h-auto">
                <img src={coin_5} alt="" className="w-full" />
              </div>
              <div className="absolute -bottom-10 left-0 md:-bottom-5 md:left-20 md:z-20 -rotate-[50deg] w-12 md:w-16 lg:w-20 h-auto">
                <img src={coin_5} alt="" className="w-full" />
              </div>
              <div className="absolute top-0 lg:-top-10 left-0  md:left-10 w-12 md:w-16 lg:w-20 h-auto">
                <img src={coin_6} alt="" className="w-full" />
              </div>
              <div className="absolute -bottom-10 left-20 md:left-[15rem] w-12 md:w-16 lg:w-20 h-auto">
                <img src={coin_6} alt="" className="w-full" />
              </div>
              <div className="absolute -bottom-10 right-0 w-12 md:w-16 lg:w-20 h-auto">
                <img src={coin_6} alt="" className="w-full" />
              </div>
            </div>
            <div className="hidden md:block absolute top-0 -left-20 md:-left-10 w-50 h-auto">
              <img src={star_col} alt="" className="w-full" />
            </div>
            <div className="hidden md:block absolute top-0 -right-20 md:-right-10 w-50 h-auto">
              <img src={star_col_2} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-y-8 pb-3 pt-8">
            <h3 className="w-[90%] text-center text-md font-urbanist mx-auto max-w-xs mb-28">
              Move the slider to see how much your $BIG will be worth at
              different h3rice targets!
            </h3>
            <div className="relative">
              <div className="bg-[#F38590] font-titan justify-between font-bold  w-full py-2 pl-10 pr-3 rounded-full flex border-4 border-[#5B5B5B]">
                <p>0%</p>
                <p>$1</p>
              </div>
              <div className="absolute left-0 top-2.5">
                <div className="flex items-center">
                  <div className="w-8 h-auto">
                    <img src={return_paw} alt="" className="w-full" />
                  </div>
                  <div className="w-5 h-auto">
                    <img src={arrow} alt="" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="absolute w-32 scale-y-125 -top-24 -left-10">
                <img src={chat_2} alt="" className="w-full" />
                <div className="absolute top-2 left-8 text-center leading-3 ">
                  <h3 className="font-titan">$0.00001</h3>
                  <p className="text-xs font-thin font-urbanist">($0.00)</p>
                  <div className="text-center font-urbanist bg-[#FF8B8F] rounded-md text-xs font-semibold">
                    Reset
                  </div>
                </div>
              </div>
              <div className="absolute w-28 scale-y-[1.3] -bottom-20 -left-10">
                <img src={chat_1} alt="" className="w-full" />
                <div className="absolute bottom-3 left-2 text-center leading-3 ">
                  <h3 className="font-titan">$0.0001</h3>
                  <p className="text-xs font-urbanist font-thin">($0.00)</p>
                  <div className="text-center font-urbanist bg-[#FF8B8F] px-2 rounded-md text-xs font-semibold">
                    Presale stage 1
                  </div>
                </div>
              </div>
              <div className="absolute w-28 scale-y-[1.3] -bottom-20 left-24 md:left-60 lg:left-80">
                <img src={chat_1} alt="" className="w-full" />
                <div className="absolute bottom-3 left-4 text-center leading-3 ">
                  <h3 className="font-titan">$0.0006</h3>
                  <p className="text-xs font-urbanist font-thin">($0.00)</p>
                  <div className="text-center font-urbanist bg-[#FF8B8F] px-2 rounded-md text-xs font-semibold">
                    Launch Price
                  </div>
                </div>
              </div>
              <div className="absolute w-28 scale-y-[1.3] -bottom-20 -right-10">
                <img src={chat_1} alt="" className="w-full" />
                <div className="absolute bottom-3 left-5 text-center leading-3 ">
                  <h3 className="font-titan">$1</h3>
                  <p className="text-xs font-urbanist font-thin">($0.00)</p>
                  <div className="text-center font-urbanist px-2 bg-[#FF8B8F] rounded-md text-xs font-semibold">
                    The Moon
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/connectwallet"
              className="bg-[#F38590] font-urbanist w-[60%] mx-auto mt-24 text-center py-2 font-bold text-white rounded-full border-4 border-[#F9C7CC] transition hover:text-black hover:bg-[#F9C7CC] duration-300 ease-in"
            >
              Claim Big Eyes
            </Link>
            <p className="w-[95%] m-auto text-center font-urbanist text-[#999999]">
              *The returns shown are projections and are not guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
