/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="main-footer-container bg-[#F8F0E1]">
        <div className="w-full flex flex-col md:flex-row justify-center p-5 md:p-[5vw] border-[#6e6a63]">
          <div className="COMPANY_section w-full md:w-1/3 flex flex-col items-start mb-4 md:mb-0">
            <h1 className="text-lg md:text-[1.8vw] uppercase text-[#6e6a63] font-bold tracking-wider">
              Company
            </h1>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-4 hover:underline cursor-pointer">
              About Us
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              Careers
            </span>
          </div>
          <div className="CUSTOMER_SERVICE_section w-full md:w-1/3 flex flex-col items-start mb-4 md:mb-0">
            <h1 className="text-lg md:text-[1.8vw] uppercase text-[#6e6a63] font-bold tracking-wider">
              Customer Service
            </h1>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-4 hover:underline cursor-pointer">
              Contact
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              FAQ
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              Returns
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              Shipping
            </span>
          </div>
          <div className="TERMS_AND_PRIVACY_section w-full md:w-1/3 flex flex-col items-start">
            <h1 className="text-lg md:text-[1.8vw] uppercase text-[#6e6a63] font-bold tracking-wider">
              Terms and Privacy
            </h1>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-4 hover:underline cursor-pointer">
              Privacy
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              Terms of Service
            </span>
            <span className="text-base md:text-[1.3vw] text-[#000000a6] mt-2 hover:underline cursor-pointer">
              Legal Notice
            </span>
          </div>
        </div>
        <div className="bottom-footer px-5 py-4 flex flex-col md:flex-row items-center justify-between border-t-[1px] border-[#6e6a63]">
          <Link to="/">
            <h1 className="uppercase text-xl md:text-[2.5vw] font-serif tracking-widest">
              Fashino
            </h1>
          </Link>
          <span className="text-sm md:text-[1vw] text-[#6e6a63] mt-2 md:mt-0">
            © 2024 - Mason Garments - ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
