import { useState, useEffect } from "react";

import logo from "../assets/images/logo.svg";
import closeMenuIcon from "../assets/images/icon-close-menu.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // close nav for desktop
    function closeNav() {
      const screenWidth = window.screen.width;
      if (screenWidth >= 640) setOpenNav(false);
    }

    window.addEventListener("resize", closeNav);
    return () => window.removeEventListener("resize", closeNav);
  }, []);

  return (
    <header className="flex items-center justify-between py-4 relative">
      <img src={logo} alt="Crowdfund logo" className="w-36 object-contain" />
      <nav>
        <ul
          className={`z-50 ${
            openNav ? "block" : "hidden"
          } absolute bottom-0 left-0 right-0 translate-y-full rounded-lg bg-white font-semibold sm:static sm:translate-y-0 sm:bg-transparent sm:flex sm:text-white`}
        >
          <li className="p-4 border-b border-b-gray-200 sm:border-b-0">
            About
          </li>
          <li className="p-4 border-b border-b-gray-200 sm:border-b-0">
            Discover
          </li>
          <li className="p-4">Get Started</li>
        </ul>
        <button className="sm:hidden" onClick={() => setOpenNav((cur) => !cur)}>
          {openNav ? (
            <img src={closeMenuIcon} alt="" />
          ) : (
            <img src={hamburgerIcon} alt="" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
