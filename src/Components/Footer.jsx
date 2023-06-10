import logo from "../assets/logo-desktop-header.svg";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row m-auto justify-between px-16 py-8 gap-y-5">
      <div className="w-48 md:w-56 h-auto md:h-auto lg:w-64 m-auto lg:m-0">
        <img src={logo} alt="logo.png" className="w-full" />
      </div>
      <div className="grid font-urbanist grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 text-center">
        <div>
          <h3 className="font-bold text-xl">About us</h3>
          <h3 className="font-thin text-lg text-[#999999]">Tokenomics</h3>
          <h3 className="font-thin text-lg text-[#999999]">Roadmaps</h3>
          <h3 className="font-thin text-lg text-[#999999]">Charity</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Documents</h3>
          <h3 className="font-thin text-lg text-[#999999]">Whitepaper</h3>
          <h3 className="font-thin text-lg text-[#999999]">Audit</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Coming Soon</h3>
          <h3 className="font-thin text-lg text-[#999999]">NFT</h3>
          <h3 className="font-thin text-lg text-[#999999]">Influencers</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Social</h3>
          <h3 className="font-thin text-lg text-[#999999]">Instagram</h3>
          <h3 className="font-thin text-lg text-[#999999]">Twitter</h3>
          <h3 className="font-thin text-lg text-[#999999]">Telegram</h3>
          <h3 className="font-thin text-lg text-[#999999]">Linktree</h3>
          <h3 className="font-thin text-lg text-[#999999]">Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
