import React from "react";
import { BsLine } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import WriterImg from "/public/images/writer.jpg";

function Writer() {
  return (
    <div
      id="writer"
      className="h-[720px] pt-[90px] px-[25px] overflow-hidden md:px-[60px] md:pt-[25px] md:flex md:justify-center md:items-center md:h-[500px] lg:h-[420px] xl:h-[580px]"
    >
      <div>
        <div>
          <h1 className="font-DroidSerif text-[30px]">Lorem Ipsum</h1>
          <p className="font-RobotoL pt-[18px] text-blueCustom text-[18px]">
            writer
          </p>
          <p className="font-RobotoL pt-[20px] text-[16px] md:w-[365px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo do consequat. Duis aute irure dolor in reprehe
            nderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est
          </p>
        </div>
        {/* social icons */}
        <div className="flex py-4">
          <a className="mr-4 cursor-pointer ">
            <FaFacebookF
              className="hover:fill-blueCustom ease-in-out duration-300"
              size={20}
            />
          </a>
          <a className="mr-4  cursor-pointer">
            <FaTwitter
              className="hover:fill-blueCustom ease-in-out duration-300"
              size={20}
            />
          </a>
          <a className="mr-4  cursor-pointer">
            <BsLine
              className="hover:fill-blueCustom ease-in-out duration-300"
              size={20}
            />
          </a>
        </div>
      </div>
      <div>
        <Image src={WriterImg} alt="#" />
      </div>
    </div>
  );
}

export default Writer;
