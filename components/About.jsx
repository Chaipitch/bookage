import React from "react";
import Image from "next/image";
import BookImg from "/public/images/cover.png";

function About() {
  return (
    <div className="h-screen mx-[27px] flex flex-col justify-center items-center pt-28 overflow-hidden">
      <h1 className="text-center font-bold text-2xl">Lorem ipsum dolor sit.</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit
      </p>

      <div className="mt-10">
        <Image src={BookImg} alt="BookImg" />
      </div>
    </div>
  );
}

export default About;
