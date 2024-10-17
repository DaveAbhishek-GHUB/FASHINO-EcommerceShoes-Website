/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="main-header-wrapper w-full bg-[#F9F7F1] flex items-center justify-between p-4 md:p-5">
        <div className="logo">
          <Link to="/">
            <h1 className="uppercase text-[2.5vw] md:text-[2vw] font-serif">Fashino</h1>
          </Link>
        </div>
        <div className="navLinks hidden md:flex gap-10">
          <Link className="text-[2vw] md:text-[1.2vw] text-[#1c1c1c]">Men</Link>
          <Link className="text-[2vw] md:text-[1.2vw] text-[#1c1c1c]">Women</Link>
          <Link className="text-[2vw] md:text-[1.2vw] text-[#1c1c1c]">Kids</Link>
          <Link className="text-[2vw] md:text-[1.2vw] text-[#1c1c1c]">Accessories</Link>
          <Link className="text-[2vw] md:text-[1.2vw] text-[#1c1c1c]">Craftsmanship</Link>
        </div>
        <div className="navIcons hidden md:flex gap-5">
          <Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[4vw] md:w-[1.5vw]" color={"#000000"} fill={"none"}>
              <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[4vw] md:w-[1.5vw]" color={"#000000"} fill={"none"}>
              <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[4vw] md:w-[1.5vw]" color={"#000000"} fill={"none"}>
              <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[3vw]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-[#F9F7F1] p-4 flex flex-col gap-4 md:hidden">
          <Link className="text-[4vw] text-[#1c1c1c]" onClick={toggleMobileMenu}>Men</Link>
          <Link className="text-[4vw] text-[#1c1c1c]" onClick={toggleMobileMenu}>Women</Link>
          <Link className="text-[4vw] text-[#1c1c1c]" onClick={toggleMobileMenu}>Kids</Link>
          <Link className="text-[4vw] text-[#1c1c1c]" onClick={toggleMobileMenu}>Accessories</Link>
          <Link className="text-[4vw] text-[#1c1c1c]" onClick={toggleMobileMenu}>Craftsmanship</Link>
        </div>
      )}
    </>
  );
}

export default Header;
