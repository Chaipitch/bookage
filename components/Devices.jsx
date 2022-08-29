import React from "react";
import Image from "next/image";
import DevicesImg from "public/images/devices.png";

function Devices() {
  return (
    <div className="relative h-[420px] px-[25px] bg-blueCustom  flex flex-col justify-start items-center overflow-hidden lg:h-[700px]">
      <div className="pt-20 ">
        <h1 className="text-center text-white font-DroidSerif text-[30px]">
          Lorem ipsum
        </h1>
        <p className="text-center pt-[24px] text-white font-RobotoL text-[16px] md:w-[540px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
      </div>
      <div className="absolute px-[18px] mt-72 md:mt-60 md:w-[600px] lg:mt-72 lg:w-fit">
        <Image src={DevicesImg} alt="#" />
      </div>
    </div>
  );
}

export default Devices;
