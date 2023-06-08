import logo from "../assets/logo-desktop-header.svg";
const Footers = () => {
  return (
    <div className="flex flex-col md:flex-row m-auto justify-between px-16 py-8 gap-y-5">
      <div className="w-48 md:w-56 h-auto md:h-auto lg:w-64 m-auto lg:m-0">
        <img src={logo} alt="logo.png" className="w-full" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 text-center">
        <div>
          <h3 className="font-bold text-xl">About us</h3>
          <h3 className="font-thin text-lg">Tokenomics</h3>
          <h3 className="font-thin text-lg">Roadmaps</h3>
          <h3 className="font-thin text-lg">Charity</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Documents</h3>
          <h3 className="font-thin text-lg">Whitepaper</h3>
          <h3 className="font-thin text-lg">Audit</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Coming Soon</h3>
          <h3 className="font-thin text-lg">NFT</h3>
          <h3 className="font-thin text-lg">Influencers</h3>
        </div>
        <div>
          <h3 className="font-bold text-xl">Social</h3>
          <h3 className="font-thin text-lg">Instagram</h3>
          <h3 className="font-thin text-lg">Twitter</h3>
          <h3 className="font-thin text-lg">Telegram</h3>
          <h3 className="font-thin text-lg">Linktree</h3>
          <h3 className="font-thin text-lg">Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Footers;
