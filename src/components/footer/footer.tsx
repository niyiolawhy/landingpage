import React from "react";
import logo from "@/assets/Brand.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" mx-auto px-8 sm:px-16 md:px-24 py-4 border-t bg-[#201E07]">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 sm:gap-0">
        <div className="flex justify-center sm:justify-start">
          <a href="#">
            <Image src={logo} alt="logo" className="w-32 sm:w-40" />
          </a>
        </div>
<div className="text-gray-300 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-4 sm:mt-0">
          <a href="#" className="hover:text-[#FFFFFF] hover:border-r px-2">
            Home
          </a>
          <a
            href="#services"
            className="hover:text-[#FFFFFF] hover:border-r px-2"
          >
            Services
          </a>
          <a
            href="#aboutUs"
            className="hover:text-[#FFFFFF] hover:border-r px-2"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-[#FFFFFF] hover:border-r px-2"
          >
            Contact
          </a>
          <div className="flex gap-4 text-gray-300">
            <FaFacebook
             
              size={20}
            />
            <BsLinkedin
           
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
