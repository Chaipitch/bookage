import React from "react";
import Image from "next/image";
import BookImg from "/public/images/cover.png";

function About() {
  return (
    <div className="h-fit mx-[27px] flex flex-col justify-center items-center pt-18 overflow-hidden md:h-4/5 xl:h-[600px] xl:flex xl:flex-row-reverse xl:px-[150px]">
      <div className="xl:max-w-[458px] xl:ml-20">
        <h1 className="text-center font-bold text-2xl font-DroidSerif mt-[92px] mb-[23px] xl:text-start">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-center font-RobotoL text-GrayCustom xl:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit
        </p>
      </div>

      <div className="mt-10 xl:w-[387px]">
        <Image src={BookImg} alt="BookImg" />
      </div>
    </div>
  );
}

export default About;
