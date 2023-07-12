import React from "react";
import GreenTruck from "../assets/images/webp/get_started.webp";
import { GoogleLogo } from "../components/common/Icon";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="flex h-screen overflow-x-hidden bg-[#FAFAFA]">
        <div className="flex items-center w-full">
          <div className="w-[55%] hidden md:block">
            <img
              src={GreenTruck}
              alt="BlueTruck"
              className="object-cover  w-full h-screen object-right"
            />
          </div>
          <div className="sm:w-3/5 md:w-[45%] w-full sm:max-w-[360px] mx-auto px-4 lg:px-0">
            <h2 className="font-Manrope font-bold text-black text-[32px] mb-9">
              Get started for free
            </h2>
            <p className="font-Poppins text-base opacity-70 font-normal text-[#020202] mb-6">
              Already have an account?
              <Link to="/sign-in" className="text-[#EB2022] ms-1">
                Sign in
              </Link>
            </p>
            <button className="flex items-center h-[49px] py-[17.5px] border-[#7D7D7D] border-[1px] w-full rounded-[6px] justify-center">
              <GoogleLogo />
              <span className="font-Manrope font-semibold text-base text-[#020202] opacity-50 ms-[10px]">
                Google
              </span>
            </button>
            <p className="font-normal text-[#020202] text-center opacity-50 text-[18px] lg:text-md font-Poppins mt-6 relative after:bg-[#020202] after:h-[1px] after:absolute after:w-[43%] after:left-0 after:top-2/4 before:bg-[#020202] before:h-[1px] before:absolute before:w-[43%] before:right-0 before:top-2/4">
              or
            </p>
            <form onSubmit={(e) => submitData(e)}>
              <label
                htmlFor="Email"
                className="font-Poppins font-normal text-xs text-[#020202] leading-[22.4px] mb-[2px]"
              >
                Email
              </label>
              <input
                id="Email"
                type="email"
                className="w-full font-Poppins h-[40px]  text-sm font-light border-[#BFBFBF] border-[1px] rounded-[6px] bg-transparent py-[11px] px-[8px] focus:outline-none"
                placeholder="example@mail.com"
                required
              />
              <label
                htmlFor="Name"
                className="font-Poppins mt-4 font-normal text-xs text-[#020202] leading-[22.4px] mb-[2px] inline-block"
              >
                Name
              </label>
              <input
                id="Name"
                type="text"
                className="w-full font-Poppins h-[40px] font-light text-sm border-[#BFBFBF] border-[1px] rounded-[6px] bg-transparent py-[11px] px-[8px] focus:outline-none"
                placeholder="Enter your name"
                required
              />
              <button
                type="submit"
                className="font-semibold h-[49px] font-Manrope text-base bg-[#EB2022] rounded-[10px] text-white py-[14px] w-full mt-[33px]"
              >
                Sign up
              </button>
            </form>
            <p className="mt-[33px] font-Poppins text-base font-normal text-[#020202] opacity-70">
              By signing up, I Agree with{" "}
              <a href="#" className="text-[#EB2022]">
                Terms{" "}
              </a>
              and{" "}
              <a href="#" className="text-[#EB2022]">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
