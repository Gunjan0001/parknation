import React from "react";
import BlueTruck2 from "../../assests/images/webp/bluetruck2.webp";
import { GoogleIcon } from "../../components/common/Icon";
import { Link } from "react-router-dom";
import microsoft from "../../assests/images/png/microsoft_logo.png";

const Login = () => {
  return (
    <>
      <section className="flex h-screen overflow-x-hidden bg-white">
        <div className="flex items-center w-full">
          <div className="w-[55%] hidden md:block">
            <img
              src={BlueTruck2}
              alt="BlueTruck"
              className="object-cover  w-full h-screen object-right"
            />
          </div>
          <div className="sm:w-[45%] w-full sm:max-w-[352px] mx-auto px-4 lg:px-0">
            <h2 className="text-4xl md:text-[32px] lg:leading-[55px] font-bold font-Manrope text-black text-center sm:text-start">
              Let’s sign you in back
            </h2>
            <form action="" className="mt-9 font-Poppins">
              <label className="text-base w-full text-black block mb-[2px] ">
                Full name
              </label>
              <input
                className="border-[1px] h-[40px] border-[#0505053D] rounded-[6px] bg-white  py-[11px] ps-2 w-full focus:outline-primary"
                type="text"
                required
                placeholder="Jhon deo"
              />

              <label className="text-base w-full text-black block mb-[2px] mt-[19px]">
                Create password
              </label>
              <input
                className="border-[1px] h-[40px] border-[#0505053D] rounded-[6px] bg-white  py-[11px] ps-2 w-full focus:outline-primary"
                type="password"
                required
                placeholder="*************"
              />

              <button className="first_btn h-[49px] w-full py-[14px] text-base font-semibold font-Manrope bg-primary rounded-[10px] text-white mt-[34px]">
                Login
              </button>
            </form>
            <div className="flex my-[33px] justify-between items-center">
              <span className="h-[1px] bg-black w-[139px]"></span>
              <span className="inline-block mx-[27px] font-Poppins text-black text-md opacity-50">
                or
              </span>
              <span className="h-[1px] bg-black w-[139px]"></span>
            </div>
            <div className="flex items-center justify-center gap-4 ">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 duration-300 ease-in-out "
                href="https://www.google.com"
              >
                <GoogleIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 duration-300 ease-in-out  "
                href="https://www.apple.com"
              >
                <img
                  src={microsoft}
                  alt="microsoft"
                  className="w-full max-w-[56px]"
                />
              </a>
            </div>
            <p className="text-center mt-[33px] font-Poppins text-black text-base">
              Don't you have an account ?{" "}
              <Link to="/sign-up" className="text-primary font-semibold">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
