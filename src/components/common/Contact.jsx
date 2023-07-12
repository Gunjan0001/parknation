import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="rounded-2xl !bg-white shadow-contactusboxshadow mb-[-115px] relative z-10 overflow-hidden lg:mt-40 md:mt-32 mt-20">
          <div className="rounder-[271px] bg-[#EB2022] opacity-[0.5] absolute top-0 left-0 z-20 w-[271px] h-[24px] blur-[49.5px]"></div>
          <div className="rounder-[271px] bg-[#EB2022] opacity-[0.30000001192092896] absolute bottom-0 right-[-10px] z-20 w-[271px] h-[73px] blur-[49.5px]"></div>
          <div className="max-w-[618px] lg:py-20 py-10 flex flex-col justify-center items-center mx-auto">
            <h4 className="lg:text-4xl md:text-3xl text-lg text-[#020202] font-bold mb-3.5 text-center">
              Contact us for more inquires
            </h4>
            <p className="lg:text-base text-sm text-black opacity-70 font-normal text-center lg:mb-10 mb-5">
              Porta quis volutpat ut ut amet. Pretium vulputate urna tortor vel
              eget fusce lorem proin. Pharetra dolor habitant ornare pharetra
              leo neque. Egestas at felis sed massa porta. Est volutpat id elit
              et.
            </p>
            <button className="lg:py-3.5 py-3 lg:px-12 px-10 text-white lg:text-base  border-[1px] border-primary hover:text-primary hover:bg-white duration-300 text-sm font-semibold bg-primary rounded-[10px]">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
