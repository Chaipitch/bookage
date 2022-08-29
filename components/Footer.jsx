import React from "react";

function Footer() {
  return (
    <div className="h-[340px] bg-[#2C2C2C] flex flex-col items-center justify-between  py-[50px] md:flex-row md:justify-around md:items-start md:h-[300px]">
      <div className="flex flex-col items-center md:items-start">
        <button className="bg-blueCustom text-white font-Roboto px-[140px] py-[15px] md:px-[40px]">
          Purchase $8
        </button>
        <p className="text-white font-RobotoL pt-[20px] text-[14px]">
          Try our Free Sample Book First
        </p>
      </div>

      <div className=" flex flex-col items-center md:items-start">
        <p className="text-white font-DroidSerif text-[16px]">
          Subscribe to Newsletter
        </p>
        <div className="relative pt-[20px]">
          <input
            className="h-[50px] w-[364px] pl-[18px] text-black "
            type="text "
            placeholder="Your email"
          />
          <button className="bg-blueCustom text-[16px] text-white font-Roboto h-[50px] absolute right-0 px-[25px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
