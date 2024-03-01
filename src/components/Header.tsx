import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2 bg-white drop-shadow-md">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/mainLogo.png"
            alt="Illinois Logo"
            width={300}
            height={400}
          />
        </a>
      </div>

      <div className="relative flex items-center flex-grow mx-4">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lightBlue">
            <img
              src="/header/searchIcon.png"
              alt="Search Icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        <input
          type="search"
          placeholder="Search Marketplace"
          className="w-full py-3 pl-4 pr-10 bg-white border border-gray-300 rounded-3xl focus:outline-none"
        />
      </div>

      <div className="flex items-center">
        <div className="flex px-2 py-1 bg-white border border-gray-300 items-cente rounded-xl focus:outline-none">
          <div className="w-auto mr-1">
            <img
              src="/header/accountLogo.png"
              alt="Account Icon"
              width={23}
              height={23}
            />
          </div>
          <div className="ml-2">
            <p className="font-semibold text-base leading-none mt-[5px] text-lightBlue">
              Hello,
            </p>
            <p className="mb-1 text-lg font-bold leading-none text-veryDarkBlue">
              John Doe
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
