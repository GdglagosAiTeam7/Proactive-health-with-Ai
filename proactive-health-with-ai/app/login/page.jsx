"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import img1 from "@/public/robot1.png";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .required("Please enter your email address*"),
    password: Yup.string().trim().required("Please enter password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      //  handleSubmit(values);
    },
  });

  return (
    <main className="w-full pt-7 md:pt-11 pb-5">
      <div className="w-[85%] md:w-[60%] mx-auto mt-1 mb-2 flex gap-1 text-[10px] md:text-base font-normal font-montserrat text-dark">
        <p>New user?</p>
        <Link
          href="/sign-up"
          className="text-[#4655ab] hover:text-[#445dea] font-medium cursor-pointer transition-all ease-linear duration-150"
        >
          Sign up
        </Link>
      </div>

      <div className="w-[70%] md:w-full mx-auto md:mx-0 md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-[60%] md:h-[450px] block md:flex rounded-md">
          <div className="md:basis-[50%] rounded-sm shadow-md order-2">
            <div className="w-full h-[200px] md:h-full relative">
              <div>
                <Image
                  src={img1}
                  alt="robot ai"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-r-md"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:basis-[50%] mt-8 md:mt-0 pb-10 md:pb-0 flex flex-col justify-center items-center bg-[#edeffc] rounded-md shadow-md order-1">
            <form className="w-[85%] md:w-[70%] flex flex-col items-center justify-center">
              <h1 className="text-base md:text-lg md:mb-8 text-[#101532] font-medium">
                Sign in
              </h1>

              <div className="w-full mt-6 relative">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.email && formik.touched.email
                      ? "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-[13px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.2rem] md:h-[2.7rem] py-1 md:py-1.5 px-4 text-[12px] md:text-[13px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text[11px] md:placeholder:text-[13px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-[#ff0000] text-[11px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>

              <div className="w-full mt-6 relative">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "block w-full h-[2.2rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.2rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-[#ff0000] text-[11px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="block w-full h-[2.2rem] md:h-[2.7rem] mt-10 py-1 md:py-1.5 bg-[#1F2B6C] text-white px-4 text-[10px] md:text-xs font-normal border-[#1F2B6C] rounded-full shadow-sm tracking-wide hover:bg-[#171d3f] cursor-pointer transition-all ease-linear duration-300"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="px-10 md:px-0 flex items-center gap-1 md:gap-2 justify-center">
          <Link
            href="/about"
            className="text-dark text-[12px] md:text-base font-normal font-montserrat tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear"
          >
            About Us
          </Link>
          <div className="text-gray-400">|</div>
          <Link
            href="/"
            className="text-dark text-[12px] md:text-base font-normal font-montserrat tracking-wide hover:text-[#445dea] cursor-pointer transition-all duration-150 ease-linear"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
