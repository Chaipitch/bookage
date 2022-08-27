import React from "react";
import Image from "next/image";
import DevicesImg from "public/images/devices.png";

function Devices() {
  return (
    <div className="h-[450px] bg-blueCustom relative overflow-hidden md:h-[680px] md:px-[190px]">
      <div className="pt-[81px] ">
        <h1 className="text-center text-white font-DroidSerif text-[24px] mb-[24px]">
          Lorem Ipsum
        </h1>
        <p className="text-[16px] text-center text-white font-RobotoL mb-[75px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <div
          className="absolute  bottom-[-8px] 
        md:left-[0] md:bottom-[-100px] 
        lg:left-[20%]"
        >
          <Image src={DevicesImg} alt="Devices" />
        </div>
      </div>
    </div>
  );
}

export default Devices;
