import React from "react";
import WhiteParking from "../../assests/images/webp/account_sign_up.webp";
import microsoft from "../../assests/images/png/microsoft_logo.png";
import { GoogleIcon, PasswordShowIcon } from "../../components/common/Icon";
import { Link } from "react-router-dom";
import FormNav from "../common/FormNav";

const AccountSignUp = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FormNav />
      <section className="flex overflow-x-hidden bg-[#FAFAFA]">
        <div className="flex items-center w-full">
          <div className="w-[55%] hidden md:block">
            <img
              src={WhiteParking}
              alt="BlueTruck"
              className="object-cover w-full h-screen object-right"
            />
          </div>
          <div className="sm:max-w-[380px] md:w-[45%] w-full md:max-w-[350px] mx-auto px-4 lg:px-0 py-6 scrollbar-none h-screen overflow-y-auto">
            <h2 className="font-Manrope font-bold text-[32px] mb-4">
              Account sign up
            </h2>
            <p className="font-Poppins text-base text-black opacity-70 font-normal mb-6">
              Already have an account?
              <Link to="/sign-in" className="text-[#EB2022]">
                Sign in
              </Link>
            </p>
            <form onSubmit={(e) => submitData(e)}>
              <label
                htmlFor="Full-name"
                className="font-Poppins font-normal text-xs text-black leading-[22.4px]"
              >
                Full name
              </label>
              <input
                id="Full-name"
                type="text"
                className="w-full border-[#BFBFBF]  h-[40px] border-[1px] rounded-[6px] bg-transparent py-[11px] px-2 focus:outline-none font-Poppins font-[300] text-[14px] text-black opacity-50"
                placeholder="Jhon deo"
                required
              />
              <label
                htmlFor="Email"
                className="font-Poppins font-normal text-xs text-black leading-[22.4px] mb-[2px] inline-block mt-4"
              >
                Email
              </label>
              <input
                id="Email"
                type="email"
                className="w-full border-[#BFBFBF] h-[40px]  border-[1px] rounded-[6px] bg-transparent py-[11px] px-2 focus:outline-none font-Poppins font-[300] text-[14px] text-black opacity-50"
                placeholder="example@mail.com"
                required
              />
              <label
                htmlFor="password"
                className="font-Poppins font-normal text-xs text-black leading-[22.4px] mb-[2px] inline-block mt-4"
              >
                Password
              </label>
              <div className="flex items-center border-[#BFBFBF] border-[1px] rounded-[6px] pe-2">
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-[6px]  h-[40px] bg-transparent py-[11px] px-2 focus:outline-none font-Poppins font-[300] text-[14px] text-black opacity-50"
                  placeholder="*************"
                  required
                />
                <div className="cursor-pointer">
                  <PasswordShowIcon />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-[17px]">
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  1 number
                </p>
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  1 Lowercase letter
                </p>
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  Special character
                </p>
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  3 capital letter
                </p>
              </div>
              <div className="flex items-center gap-4 mt-[11px]">
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  8 characters minimum
                </p>
                <p className="font-Poppins font-[300] text-[10px] text-black opacity-50">
                  avoid 3 or more recurring character
                </p>
              </div>
              <label
                htmlFor="Company-Name"
                className="font-Poppins font-normal text-xs text-black leading-[22.4px] mb-[2px] inline-block mt-[17px]"
              >
                Company Name
              </label>
              <input
                id="Company-Name"
                type="text"
                className="w-full border-[#BFBFBF] h-[40px] border-[1px] rounded-[6px] bg-transparent font-Poppins font-[300] text-[14px] text-black opacity-50 py-[11px] px-2 focus:outline-none "
                placeholder="Set company name"
                required
              />
              <button
                type="submit"
                className="font-semibold first_btn   h-[49px] text-base bg-[#EB2022] rounded-[10px] text-white py-[14px] w-full mt-[33px] font-Manrope"
              >
                Sign up
              </button>
            </form>
            <p className="font-normal text-black text-center opacity-50 text-[18px] lg:text-md font-Poppins mt-5 relative after:bg-[#020202] after:h-[1px] after:absolute after:w-[43%] after:left-0 after:top-2/4 before:bg-[#020202] before:h-[1px] before:absolute before:w-[43%] before:right-0 before:top-2/4">
              or
            </p>
            <div className="flex items-center justify-center mt-[30px] xl:mt-[40px] gap-[20px]">
              <GoogleIcon className="w-[28px]" />
              <img
                src={microsoft}
                alt="microsoft"
                className="w-full max-w-[56px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountSignUp;
