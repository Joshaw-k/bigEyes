import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ValidationError = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-[#FFE8E8] font-urbanist w-[70%] max-w-xs md:mt-10 mt-28 flex flex-col items-center rounded-3xl py-8 px-3 m-auto">
          <div>
            <RiErrorWarningFill className="text-[#CF1212] text-5xl" />
          </div>
          <p className="mt-3 text-center font-semibold">
            Unable to validate Wallet!!!!,
            <br />
            Try another Wallet
          </p>
          <Link
            to="/connectwallet"
            className="bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default ValidationError;
