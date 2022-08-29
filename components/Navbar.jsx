import { useState, useEffect } from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleToggle = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const navToggle = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={
        scroll
          ? "fixed pt-[25px] pb-4 w-full z-10 bg-white/40 backdrop-blur-lg shadow-lg ease-in duration-300 md:px-[40px] xl:px-[150px]"
          : "fixed pt-[37px] pb-4 w-full z-10 ease-in duration-300 md:px-[40px] xl:px-[150px]"
      }
    >
      <div className="mx-[27px] flex items-center justify-between">
        <Link className="link" href="/">
          <Image
            className="z-50 cursor-pointer"
            height="38px"
            width="135px"
            src={logo}
            alt="logoImage"
          />
        </Link>

        {/* desktop menu */}
        <ul className="hidden lg:flex">
          <li className="mr-[30px] font-Roboto text-[16px] border-b-2 border-transparent hover:border-black">
            <Link href="/" to="home" smooth={true} duration={500}>
              Purchase
            </Link>
          </li>
          <li className="mr-[30px] font-Roboto text-[16px] border-b-2 border-transparent hover:border-black">
            <Link href="/#example" to="about" smooth={true} duration={500}>
              Example
            </Link>
          </li>
          <li className="mr-[30px] font-Roboto text-[16px] border-b-2 border-transparent hover:border-black">
            <Link href="/#writer" to="skills" smooth={true} duration={500}>
              Writer
            </Link>
          </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleToggle} className="lg:hidden z-50">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-between items-start  z-10 py-32 px-[25px]"
          }
        >
          <div className="w-full">
            <li
              onClick={navToggle}
              className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto"
            >
              <Link
                className="btn btn-ghost text-1xl "
                to="home"
                smooth={true}
                duration={500}
                href="/"
              >
                Home
              </Link>
            </li>
            <li
              onClick={navToggle}
              className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto"
            >
              <Link
                className="btn btn-ghost text-1xl "
                to="home"
                smooth={true}
                duration={500}
                href="/"
              >
                Purchase
              </Link>
            </li>
            <li
              onClick={navToggle}
              className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto"
            >
              <Link
                className="btn btn-ghost text-1xl "
                to="home"
                smooth={true}
                duration={500}
                href="/#example"
              >
                Example
              </Link>
            </li>
            <li
              onClick={navToggle}
              className="pb-[16px] mb-2 w-full text-2xl font-Roboto"
            >
              <Link
                className="btn btn-ghost text-1xl"
                to="home"
                smooth={true}
                duration={500}
                href="/#writer"
              >
                Writer
              </Link>
            </li>
          </div>
          <button className="bg-blueCustom px-24 py-3 w-full  font-Roboto text-white text-[16px]">
            Purchase $8
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
