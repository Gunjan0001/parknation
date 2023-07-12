import React from "react";
import TrucksParking from "../../assests/images/webp/recovery_code.webp";
import { RedCoppyBtn, RedQuestionMark } from "../../components/common/Icon";

const Code = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="flex h-screen overflow-x-hidden bg-[#FAFAFA]">
        <div className="flex items-center w-full">
          <div className="w-[55%] hidden md:block">
            <img
              src={TrucksParking}
              alt="BlueTruck"
              className="object-cover  w-full h-screen object-right"
            />
          </div>
          <div className="md:w-[45%] w-full sm:max-w-[380px] mx-auto px-4 lg:px-0">
            <h2 className="font-Manrope font-bold text-black text-[32px] mb-4">
              MFA recovery code
            </h2>
            <p className="font-Poppins leading-[160%] text-base text-[#020202] opacity-70 font-normal mb-[27px]">
              Recovery code can be used to disable multi-factor authentication
              in case you lose your phone
            </p>
            <div
              className="flex h-[40px] items-center border-[#F28586] border-[1px] rounded-[6px] bg-[#F9E9E9]
            py-3 px-2"
            >
              <RedQuestionMark />
              <p className="font-[300] text-[12px] text-[#020202] opacity-50 font-Poppins ms-[7px]">
                Copy and save the code. we won’t show it again.
              </p>
            </div>
            <form onSubmit={(e) => submitData(e)}>
              <label
                htmlFor="Email"
                className="font-Poppins font-normal text-xs text-[#020202] leading-[22.4px] mb-[2px] mt-[27px] inline-block"
              >
                Your recovery code
              </label>
              <div className="flex items-center h-[40px] py-[11px] border-[#BFBFBF] border-[1px] rounded-[6px] pe-2">
                <input
                  id="Email"
                  type="email"
                  className="w-full bg-transparent py-[11px] px-2 focus:outline-none font-Poppins font-[300] text-[14px]"
                  placeholder="37903375"
                />
                <div className="cursor-pointer">
                  <RedCoppyBtn />
                </div>
              </div>
              <button
                type="submit"
                className="font-semibold h-[49px] text-base bg-[#EB2022] rounded-[10px] text-white py-[14px] w-full mt-[33px]  font-Manrope"
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Code;
