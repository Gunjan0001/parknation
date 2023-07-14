import React from "react";
import BlueTruck from "../../assests/images/webp/sign_in.webp";
import { FacebookLogo, Google } from "../../components/common/Icon";
import { Link } from "react-router-dom";
import FormNav from "../common/FormNav";

const SignIn = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FormNav/>
      <section className="flex h-screen overflow-x-hidden bg-[#FAFAFA]">
        <div className="flex items-center w-full">
          <div className="w-[55%] hidden md:block">
            <img
              src={BlueTruck}
              alt="BlueTruck"
              className="object-cover w-full h-screen object-right"
            />
          </div>
          <div className="md:w-[45%] w-full sm:max-w-[360px] mx-auto px-4 lg:px-0 ">
            <h2 className="font-Manrope font-bold text-[32px] mb-9">Sign-in</h2>
            <p className="font-Poppins text-base opacity-70 font-normal text-[#020202] mb-6">
              Don’t have an account?
              <Link to="/account-sign-up" className="text-[#EB2022]">
                {" "}
                Sign up
              </Link>
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
                className="w-full border-[#BFBFBF] h-[40px] border-[1px] rounded-[6px] bg-transparent py-[11px] px-[8px] focus:outline-none font-Poppins font-[300] text-[14px]"
                placeholder="example@mail.com"
                required
              />
              <button
                type="submit"
                className="font-semibold first_btn h-[49px] text-base bg-[#EB2022] rounded-[10px] text-white py-[14px] w-full mt-[33px] font-Manrope"
              >
                Sign in
              </button>
            </form>
            <p className="font-normal text-[#020202] text-center opacity-50 text-[18px] lg:text-md font-Poppins mt-7 relative after:bg-[#020202] after:h-[1px] after:absolute after:w-[43%] after:left-0 after:top-2/4 before:bg-[#020202] before:h-[1px] before:absolute before:w-[43%] before:right-0 before:top-2/4">
              or
            </p>
            <div className="flex items-center mt-6">
              <button className="flex items-center h-[45px] py-[12px] border-[#707070] border-[1px] w-full rounded-[6px] justify-center hover:translate-y-[-5px] ease-in-out duration-300">
                <Google />
                <span className="font-Manrope font-medium text-base text-[#020202] ms-[10px]">
                  Google
                </span>
              </button>
              <button className="flex h-[45px] items-center py-[12px] border-[#707070] ms-[20px] border-[1px] w-full hover:translate-y-[-5px] ease-in-out duration-300 rounded-[6px] justify-center">
                <FacebookLogo />
                <span className="font-Manrope font-medium text-base text-[#020202] ms-[10px]">
                  Facebook
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
