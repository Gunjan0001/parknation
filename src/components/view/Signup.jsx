import React from "react";
import BlueTruck from "../assets/images/webp/bluetruck.webp";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../components/common/Icon";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="flex h-screen overflow-x-hidden bg-white">
        <div className="flex items-center w-full gap-4">
          <div className="w-[55%] hidden md:block">
            <img
              src={BlueTruck}
              alt="BlueTruck"
              className="object-cover w-full min-h-screen object-right"
            />
          </div>
          <div className="sm:w-[50%] w-full max-w-[352px] sm:max-w-[400px] mx-auto px-4 lg:px-0 xl:pt-[50px] 2xl:pt-0 ">
            <h2 className="text-lg md:text-[32px] lg:text-xl font-bold font-Manrope text-black text-center sm:text-start">
              Register yourself
            </h2>
            <form action="" className="mt-9 font-Poppins">
              <label className="text-base font-Poppins font-normal w-full text-black block mb-[2px] ">
                Full name
              </label>
              <input
                className="border-[1px] font-Poppins  h-[40px]   border-[#0505053D] bg-white rounded-[6px]  py-[11px] ps-2 w-full focus:outline-primary"
                type="text"
                required
                placeholder="Jhon deo"
              />
              <label className="text-base font-Poppins w-full font-normal text-black block mb-[2px] mt-4">
                Email
              </label>
              <input
                className="border-[1px] font-Poppins  h-[40px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] ps-2 w-full"
                type="email"
                required
                placeholder="example@mail.com"
              />
              <label className="text-base font-Poppins w-full font-normal text-black block mb-[2px] mt-4">
                Create password
              </label>
              <input
                className="border-[1px] font-Poppins  h-[40px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] ps-2 w-full"
                type="password"
                required
                placeholder="*************"
              />
              <label className="text-base font-Poppins w-full font-normal text-black block mb-[2px] mt-4">
                Confirm password
              </label>
              <input
                className="border-[1px] font-Poppins h-[40px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] ps-2 w-full"
                type="password"
                required
                placeholder=" *************"
              />
              <button className="first_btn h-[49px]  w-full py-[12px] text-white text-base font-semibold  mt-[33px] font-Manrope">
                Register now
              </button>
            </form>
            <div className="flex my-[30px] justify-between items-center">
              <span className="h-[1px]  bg-black w-[139px]"></span>
              <span className="inline-block mx-[27px] font-Poppins text-black text-md opacity-50">
                or
              </span>
              <span className="h-[1px] bg-black w-[139px]"></span>
            </div>
            <div className="flex items-center justify-center gap-4 ">
              <a
                className="hover:-translate-y-1 duration-300 ease-in-out  "
                href="https://www.google.com"
              >
                <GoogleIcon />
              </a>
              <a
                className="hover:-translate-y-1 duration-300 ease-in-out  "
                href="https://www.apple.com"
              >
                <AppleIcon />
              </a>
              <a
                className="hover:-translate-y-1 duration-300 ease-in-out  "
                href="https://www.facebook.com"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
