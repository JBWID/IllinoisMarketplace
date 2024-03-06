import React from "react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="">
        <span className="flex text-2xl text-headingBlack mt-[35px] font-semibold">
          Categories
        </span>
        <hr className="border-t border-gray-300 mt-[10px] mb-[15px] w-[250px]" />
        <div className="flex w-[250px] h-[45px] rounded-xl px-[10px] items-center hover:bg-buttonCircle group">
          <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-buttonCircle group-hover:bg-lightBlue">
            <img
              className=""
              src={process.env.PUBLIC_URL + "/sidebar/categories/apparel.png"}
              alt=""
              height={20}
              width={20}
            />
          </div>
          <span className="text-xl font-semibold text-subheadingBlack ml-[10px]">
            Apparel
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
