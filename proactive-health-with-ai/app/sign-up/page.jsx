"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import img3 from "@/public/robot3.jpg";
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';


const Login = () => {

  //  const [email, setEmail] = useState('')
  //  const [password, setPassword] = useState('')
  //  const [] = useState('')

  const router = useRouter();


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .trim()
      .required("Please enter your email address*"),
    password: Yup.string().trim().required("Please enter password")
    // confirmPassword: Yup.string().trim().required("Please confirm password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
      // confirmPassword: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post('https://proactive-health-ai.onrender.com/api/signup', {
          email: values.email,
          password: values.password
        },{
          headers: {
            'Content-Type': 'application/json',
          }
        }
          
        )

        const data = await response.json()
        if(response.status === 200){
          router.push('/hospital')
        }
      } catch (error) { 
        console.error('Error signing up on the frontend', error);
      }
    },
  });

  return (
    <main className="w-full pt-7 md:pt-14 pb-5">
      <div className="w-[85%] md:w-[60%] mx-auto mt-8 md:mt-1 mb-2 flex gap-1 text-xs md:text-sm font-normal font-montserrat text-dark">
        <p>Already have an account?</p>
        <Link
          href="/login"
          className="text-[#4655ab] hover:text-[#445dea] font-medium cursor-pointer transition-all ease-linear duration-150"
        >
          Sign in
        </Link>
      </div>

      <div className="w-[85%] md:w-full mx-auto md:mx-0 md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-[60%] md:h-[450px] block md:flex rounded-md ">
          <div className="md:basis-[50%] rounded-sm shadow-md order-2">
            <div className="w-full h-[250px] md:h-full relative">
              <div>
                <Image
                  src={img3}
                  alt="robot"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-r-md"
                />
              </div>
            </div>
          </div>
          {/* bg-[#edeffc] */}
          <div className="w-full md:basis-[50%] pt-7 pb-10 md:pb-0 flex flex-col justify-center items-center md:bg-[#f8f8ff] bg-[#ddddf3] rounded-md shadow-md order-1">
            <form onSubmit={formik.handleSubmit} className="w-[85%] md:w-[70%] flex flex-col items-center justify-center">
              <div className="md:mb-8 text-center">
                <h1 className="text-base font-bold md:text-lg text-[#101532] md:font-medium">
                  Sign Up
                </h1>
                <p className="mt-1 text-xs md:text-sm text-gray-500 font-normal tracking-wide">
                  ..to enjoy our premium services
                </p>
              </div>

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
                      ? "block w-full h-[2.4rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.4rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-[#ff0000] text-[11px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              {/* <div className="w-full mt-6 relative">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "block w-full h-[2.4rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#ff7272] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#ff7272] tracking-wide rounded-full shadow-sm"
                      : "block w-full h-[2.4rem] md:h-[2.7rem] mt-1 py-1 md:py-1.5 px-4 text-[12px] text-[#101532] border-0 outline-none ring-1 ring-inset ring-[#d4d4d4] placeholder:text-gray-400 placeholder:text[11px] focus:ring-1 focus:ring-inset focus:ring-[#999999] tracking-wide rounded-full shadow-sm"
                  }
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="text-[#ff0000] text-[11px] text-center absolute left-0 right-0 mx-auto">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div> */}

              <button
                type="submit"
                className="block w-full h-[2.4rem] md:h-[2.7rem] mt-10 py-1 md:py-1.5 bg-[#1F2B6C] text-white px-4 text-xs md:text-xs font-normal border-[#1F2B6C] rounded-full shadow-sm tracking-wide hover:bg-[#171d3f] cursor-pointer transition-all ease-linear duration-300"
              >
                Sign up
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
