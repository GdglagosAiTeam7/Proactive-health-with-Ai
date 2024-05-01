"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/phai-logo.png";

const Navbar = () => {
  const pathname = usePathname();
  // md:bg-[#f8f8ff]
  return (
    <div className="w-full py-4 md:py-8 bg-[#ddddf3] md:bg-[#eeeefb] shadow-sm md:shadow-md relative">
      <div className="w-full grid place-items-center md:w-[90%] md:mx-auto p-3 md:flex md:items-center md:justify-between">
        <div className="md:basis-[50%] flex items-center gap-4 justify-center md:justify-start md:gap-14">
          <div>
            <Image src={logo} alt="laptop bg" width={100} height={50} />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <Link
                href="/"
                className={`text-dark text-base md:text-lg font-medium tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear ${
                  pathname === "/" ? "text-[#445dea]" : ""
                }`}
              >
                Home
              </Link>
            </div>
            <div className="text-gray-400">|</div>
            <div className="flex items-center gap-1 md:gap-2 justify-center">
              <Link
                href="/about"
                className={`text-dark text-base md:text-lg font-medium tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear ${
                  pathname === "/about" ? "text-[#445dea]" : ""
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="md:basis-auto mt-3 md:mt-0 pb-1 self-end flex items-center justify-center md:justify-start gap-3 md:gap-5">
          <div>
            <Link
              href="/sign-up"
              className="px-5 md:px-8 md:py-3 py-2 text-xs md:text-sm border md:border-2 border-[#1F2B6C] text-[#1F2B6C] font-semibold rounded-full tracking-wide hover:bg-[#f1f3fc] md:hover:bg-[#dde0f2] hover:border-[#a5aac5] cursor-pointer transition-all ease-linear duration-100"
            >
              Sign up
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="px-5 md:px-8 md:py-3 py-2 text-xs md:text-sm border md:border-2 border-[#1F2B6C] hover:border-[#1F2B6C] font-medium hover:font-semibold rounded-full tracking-wider bg-[#1F2B6C] text-white hover:bg-[#f1f3fc] md:hover:bg-[#dde0f2] hover:text-[#1F2B6C] cursor-pointer transition-all ease-linear duration-100"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
