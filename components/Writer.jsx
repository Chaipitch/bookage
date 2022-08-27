import React from "react";
import { BsLine } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import WriterImg from "/public/images/writer.jpg";

function Writer() {
  return (
    <div className="h-screen pt-24 ">
      <div className="mx-[25px]">
        <h1 className="text-xl mb-4 font-DroidSerif">Lorem Ipsum</h1>
        <p className="mb-4 text-blueCustom font-RobotoL">Writer</p>
        <p className="mb-8 font-RobotoL">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commo do consequat. Duis aute irure dolor in reprehe
          nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est
        </p>
        <div className="flex">
          <a className="mr-4 cursor-pointer">
            <FaFacebookF size={25} />
          </a>
          <a className="mr-4  cursor-pointer">
            <FaTwitter size={25} />
          </a>
          <a className="mr-4  cursor-pointer">
            <BsLine size={25} />
          </a>
        </div>
      </div>
      <div className="mt-14">
        <Image src={WriterImg} alt="BookImg" />
      </div>
    </div>
  );
}

export default Writer;
