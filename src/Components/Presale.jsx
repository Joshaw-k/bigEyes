import lucky_cat from "../assets/lucky-cat.webp";
import { Link } from "react-router-dom";

const Presale = () => {
  return (
    <div className="bg-[#FFDCAA] py-12 px-3">
      <div className="bg-[#A6E8FE] w-[90%] max-w-[900px] overflow-hidden m-auto border-2 border-[#5B5B5B] rounded-[3.5rem] shadow-black shadow">
        <div className="flex pl-14 py-3 w-[10rem] gap-x-2">
          <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#EB6E6E]"></div>
          <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#FFDEA9]"></div>
          <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#CCE79E]"></div>
        </div>
        <div className="bg-white flex flex-col items-start gap-x-10 lg:flex-row lg:px-8 lg:divide-x-2 divide-black border-t-2 border-black">
          <div className="border-2 py-10 my-16 px-8 border-[#C4C4C4] rounded-3xl w-[90%] max-w-lg mx-auto">
            <div className="flex flex-col gap-y-8">
              <h3 className="text-center font-urbanist font-semibold text-[#F38590]">
                PRESALE ENDED
              </h3>
              <Link
                to="/connectwallet"
                className="bg-[#F38590] font-urbanist w-full text-center py-2 font-bold text-white rounded-full border-4 border-[#F9C7CC] transition hover:text-black hover:bg-[#F9C7CC] duration-300 ease-in"
              >
                Claim Big Eyes
              </Link>
            </div>
          </div>
          <div className="w-[90%] lg:w-full my-16 max-w-lg m-auto">
            <div className="relative">
              <div className="w-[15rem] h-auto">
                <img src={lucky_cat} alt="" className="w-full" />
              </div>
              <div className="absolute h-[100%] w-0.5 top-0 right-0 bg-[#655D59]">
                <div className="w-4 h-4 border-2 absolute top-16 -right-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
              </div>
            </div>
            <div className="mt-14 px-4">
              <div className="flex flex-col gap-y-6">
                <h3 className="text-center font-semibold font-urbanist text-[#999999]">
                  PRESALE ENDED
                </h3>
                <div className="bg-[#A6E8FE] border-4 border-[#757473] rounded-full p-2">
                  <div className="w-full py-2 rounded-full flex gap-x-1 justify-center bg-white border-2 border-[#757473]">
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                    <div className="w-6 h-6 border-2 border-[#5B5B5B] rounded-full bg-[#E9959D]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
