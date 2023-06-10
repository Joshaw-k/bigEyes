import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { TbBrandLinktree } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/logo-desktop-header.svg";
const Header = () => {
  return (
    <div className="flex bg-[#F8C0C6] items-center gap-x-6 md:gap-x-2 py-8 md:py-3 px-10 md:px-8 justify-between">
      <div className="hidden md:flex gap-x-4">
        <div>
          <AiFillInstagram className="text-white text-3xl transition hover:text-black duration-300 ease-in cursor-pointer" />
        </div>
        <div>
          <BsTwitter className="text-white text-3xl transition hover:text-black duration-300 ease-in cursor-pointer" />
        </div>
        <div>
          <FaTelegramPlane className="text-white text-3xl transition hover:text-black duration-300 ease-in cursor-pointer" />
        </div>
        <div>
          <TbBrandLinktree className="text-white text-3xl transition hover:text-black duration-300 ease-in cursor-pointer" />
        </div>
        <div>
          <BsDiscord className="text-white text-3xl transition hover:text-black duration-300 ease-in cursor-pointer" />
        </div>
      </div>
      <div className="w-24 h-auto">
        <img src={logo} alt="logo.png" className="w-full" />
      </div>
      <div className="flex flex-col-reverse gap-y-3 gap-x-2 md:flex-row">
        <button className="bg-transparent font-urbanist py-2 px-12 font-thin rounded-full text-lg text-white border-4 border-white transition hover:text-black hover:bg-white duration-300 ease-in">
          English
        </button>
        <button className="bg-white py-3 px-12 font-urbanist font-bold rounded-full text-lg  transition hover:text-white hover:bg-black duration-300 ease-in">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Header;
