import React from "react";
import AuthenticarTruck from "../../assests/images/webp/authenticator-truck.webp";
import QRCode from "../../assests/images/png/qrCode.png";
import FormNav from "../common/FormNav";

const Authenticator = () => {
  return (
    <>
      <FormNav />
      <section className="flex h-screen overflow-x-hidden bg-white">
        <div className="flex items-center w-full gap-4">
          <div className="w-[55%] hidden md:block">
            <img
              src={AuthenticarTruck}
              alt="AuthenticarTruck"
              className="object-cover w-full h-screen object-right"
            />
          </div>
          <div className="sm:w-[62%] md:w-[51%] w-full sm:max-w-[400px] lg:max-w-[365px] mx-auto px-4 lg:px-0">
            <div className="bg-transparent max-w-[150px] xl:max-w-[221px] text-center ml-auto mr-auto sm:ml-0">
              <img
                src={QRCode}
                className="h-[150px] xl:h-[223px] w-full"
                alt="QR Code"
              />
            </div>
            <h2 className="text-lg md:text-[32px] pt-[16px] font-bold font-Manrope text-black text-center sm:text-start">
              Setup Authenticator
            </h2>

            <p className="font-Poppins font-normal text-[#020202] opacity-70 text-center pt-[16px] sm:text-start">
              Use your phone to scan the following QR code with Google
              Authenticator or other Authenticator apps.
            </p>
            <p className="font-Poppins font-normal text-[#020202] opacity-70 mt-4 text-center sm:text-start">
              Please enter the six-digit code from your Authenticator app
            </p>
            <form action="" className="mt-5 font-Poppins">
              <div className="flex gap-2 xs:gap-3 justify-center sm:justify-start">
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px]  border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2  focus:outline-primary"
                  type="text"
                  required
                  placeholder=""
                />
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2"
                  type="text"
                  required
                  placeholder=""
                />
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2 "
                  type="text"
                  required
                  placeholder=""
                />
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2 "
                  type="text"
                  required
                  placeholder=""
                />
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2 "
                  type="text"
                  required
                  placeholder=""
                />
                <input
                  className="border-[1px] w-[45px] xs:w-[51.09px] focus:outline-primary border-[#0505053D] bg-white rounded-[6px]  py-[11px] px-2 "
                  type="text"
                  required
                  placeholder=""
                />
              </div>
              <div className="flex  w-full mt-4 justify-center sm:justify-start items-start">
                <input
                  className="cursor-pointer mt-[6px] "
                  id="donot-show"
                  type="checkbox"
                />
                <label
                  htmlFor="donot-show"
                  className="inline-block text-black opacity-70 ms-[5px] leading-[150%]"
                >
                  Don’t show again on this device for 14 days
                </label>
              </div>
              <button className="first_btn h-[49px] font-Manrope w-full py-[14px] bg-primary text-white rounded-[10px] text-base font-semibold  mt-[33px]">
                Done
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authenticator;
