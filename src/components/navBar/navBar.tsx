"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/Brand.png";
import Button from "../utils/btn";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "About Us", path: "#aboutUs" },
    { name: "Contact", path: "#contactUs" },
  ];

  return (
    <nav className="bg-[#201E07] border-b-2 sticky top-0 z-50">
      <div className="container mx-auto px-8 sm:px-16 md:px-10 py-2 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="sm:hidden flex justify-between items-center w-full">
          <div className="flex-1"></div>{" "}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-row text-gray-300 items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="hover:text-[#FFFFFF] hover:border-l px-2"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <Link href={"/contact-us"}>
          <div className="hidden sm:flex gap-3">
            <Button
              color="text-[#07070A] bg-[#FDE547]"
              textSize="py-2 px-4 rounded-3xl"
            >
              {" "}
              Hire Us{" "}
            </Button>
          </div>
        </Link>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-[#201E07] text-gray-300">
          <div className="flex flex-col px-8 py-4">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="hover:text-[#FFFFFF] hover:border-l px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <Link href={"/contact-us"}>
            <div className="px-8 py-2">
              <Button
                color="text-[#07070A] bg-[#FDE547]"
                textSize="py-2 px-4 rounded-3xl"
              >
                {" "}
                Hire Us{" "}
              </Button>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
