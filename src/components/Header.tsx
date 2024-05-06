import { useState, useEffect } from "react";

import logo from "../assets/images/logo.svg";
import closeMenuIcon from "../assets/images/icon-close-menu.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

function NavListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="sm:p-4 border-b border-b-gray-200 sm:border-b-0">
      <a
        href="#"
        className="p-6 sm:p-0 block sm:inline sm:pb-1 border-b-2 border-transparent hover:text-dark-cyan sm:hover:border-white sm:hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

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
    <>
      <header className="z-40 flex items-center justify-between py-8 sm:py-4 relative w-full max-w-6xl mx-auto">
        <img src={logo} alt="Crowdfund logo" className="w-36 object-contain" />
        <nav>
          <ul
            className={`z-50 ${
              openNav ? "block" : "hidden"
            } absolute bottom-0 left-0 right-0 translate-y-full rounded-lg bg-white font-semibold sm:static sm:translate-y-0 sm:bg-transparent sm:flex gap-1 sm:text-white overflow-hidden`}
          >
            <NavListItem>About</NavListItem>
            <NavListItem>Discover</NavListItem>
            <NavListItem>Get Started</NavListItem>
          </ul>
          <button
            className="sm:hidden"
            onClick={() => setOpenNav((cur) => !cur)}
          >
            {openNav ? (
              <img src={closeMenuIcon} alt="" />
            ) : (
              <img src={hamburgerIcon} alt="" />
            )}
          </button>
        </nav>
      </header>
      {/* dark overlay for behind moblie menu */}
      {openNav && (
        <div
          className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-black/[0.4]"
          onClick={() => setOpenNav(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
