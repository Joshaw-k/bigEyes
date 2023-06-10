import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { wallets } from "../utils/wallets";

const Initialization = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(`/importwallet/${id}`), 3000);
  });
  return (
    <div className="min-h-[100vh] bg-[#FFDCAA] pt-16">
      <div className="max-w-md mx-auto w-[90%] bg-white border-2 border-[#5B5B5B] px-6 pt-3 pb-10 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <h5 className="text-[#5B5B5B] font-bold font-urbanist">Back</h5>
          <AiOutlineClose className="text-[#FF1E1E] text-2xl" />
        </div>
        <div className="px-5 py-8 font-urbanist rounded-2xl mb-5 border border-[#00C920] text-[#00C920] flex md:text-lg">
          <p>Initializing</p>
          <Typewriter
            className="inline "
            options={{
              strings: ["...", "..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="px-5 py-8 rounded-2xl border cursor-pointer border-[#9F9F9F] flex items-center justify-between">
          <div className="flex flex-col font-urbanist gap-y-10 text-[#5B5B5B]">
            <h3 className="font-bold text-2xl">{wallets[id].title}</h3>
            <h5>Easy-to-Use browser extension</h5>
          </div>
          <div className="w-[30px] h-[30px]">
            <img src={wallets[id].icon} alt="logo.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initialization;
