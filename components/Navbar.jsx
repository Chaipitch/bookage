import { useState, useEffect } from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

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
          ? "fixed pt-[25px] pb-4 w-full z-10 bg-black/10 backdrop-blur-md shadow-lg ease-in duration-300"
          : "fixed pt-[37px] pb-4 w-full z-10 ease-in duration-300"
      }
    >
      <div className="mx-[27px] flex items-center justify-between">
        <Image height="46px" width="165px" src={logo} alt="logoImage" />

        <ul className="flex ">
          <li className="ml-4">
            <Link className="link" href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link className="link" href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link className="link" href="/qwer">
              <a>wer</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
