import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((menu) => !menu);
  };
  return (
    <header
      className={`header bg-gray-400 fixed left-0 right-0 z-10 ${
        openMenu ? "open" : ""
      }`}
    >
      <nav className="mart-container py-5 flex justify-between items-center">
        <Link
          to="/"
          className="logo z-20 font-playFair text-white text-2xl md:text-3xl"
        >
          ShedaMart
        </Link>

        <HeaderLinks />

        <button
          className="hamburger-btn z-20 space-y-1 md:hidden"
          onClick={handleMenu}
        >
          <span className="block w-6 h-0.5 bg-black transition-transform duration-500 "></span>
          <span className="block w-6 h-0.5 bg-black transition-opacity duration-300"></span>
          <span className="block w-4 h-0.5 bg-black transition-transform duration-500"></span>
        </button>
      </nav>

      <HeaderMenu handleMenu={handleMenu} />
    </header>
  );
}

export default Header;
