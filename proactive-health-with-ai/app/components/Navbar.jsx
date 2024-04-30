"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/phai-logo.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-8 bg-white shadow-md shadow-slate-200">
      <div className="w-[90%] mx-auto flex items-center">
        <div className="basis-[80%] flex items-center gap-14">
          <div>
            <Image src={logo} alt="laptop bg" width={100} height={50} />
          </div>
          <div className="my-3 flex gap-3 items-center">
            <div>
              <Link
                href="/"
                className={`text-dark text-[12px] md:text-base font-medium tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear ${
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
                className={`text-dark text-[12px] md:text-base font-medium tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear ${
                  pathname === "/about" ? "text-[#445dea]" : ""
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="basis-auto self-end flex items-center gap-5">
          <div>
            <Link
              href="/sign-up"
              className="px-5 py-3 text-sm border-2 border-[#1F2B6C] text-[#1F2B6C] hover:text-white font-semibold rounded-full hover:border-transparent hover:bg-[#1F2B6C] cursor-pointer transition-all ease-linear duration-100"
            >
              Sign up
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className={`text-dark text-[12px] md:text-base font-medium tracking-wide hover:text-[#445dea] hover:underline cursor-pointer transition-all duration-150 ease-linear ${
                pathname === "/login" ? "text-[#445dea]" : ""
              }`}
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
