import { useState, useEffect } from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

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
          ? "fixed pt-[25px] pb-4 w-full z-10 bg-white/0 backdrop-blur-lg shadow-lg ease-in duration-300 md:px-[100px] xl:px-[150px]"
          : "fixed pt-[37px] pb-4 w-full z-10 ease-in duration-300 md:px-[100px] xl:px-[150px]"
      }
    >
      <div className="mx-[27px] flex items-center justify-between">
        <Image
          className="z-50"
          height="38px"
          width="135px"
          src={logo}
          alt="logoImage"
        />

        {/* desktop menu */}
        <ul className="hidden lg:flex">
          <li className="mr-4 border-b-2 border-transparent hover:border-black">
            <Link href="/" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mr-4 border-b-2 border-transparent hover:border-black">
            <Link href="/" to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="mr-4 border-b-2 border-transparent hover:border-black">
            <Link href="/" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="mr-4 border-b-2 border-transparent hover:border-black">
            <Link href="/" to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="mr-4 border-b-2 border-transparent hover:border-black">
            <Link href="/" to="contact" smooth={true} duration={500}>
              Contact
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
            <li className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto">
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
            <li className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto">
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
            <li className=" border-b-2 pb-[16px] mb-2 w-full text-2xl font-Roboto">
              <Link
                className="btn btn-ghost text-1xl "
                to="home"
                smooth={true}
                duration={500}
                href="/"
              >
                Example
              </Link>
            </li>
            <li className="  pb-[16px] mb-2 w-full text-2xl font-Roboto">
              <Link
                className="btn btn-ghost text-1xl"
                to="home"
                smooth={true}
                duration={500}
                href="/"
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
