import React from "react";

const Contact = () => {
  return (
      <div className="rounded-2xl !bg-white shadow-contactusboxshadow mb-[-115px] relative z-10 container overflow-hidden">
        <div className="rounder-[271px] bg-[#EB2022] opacity-[0.5] absolute top-0 left-0 z-20 w-[271px] h-[24px] blur-[49.5px]"></div>
        <div className="rounder-[271px] bg-[#EB2022] opacity-[0.30000001192092896] absolute bottom-0 right-[-10px] z-20 w-[271px] h-[73px] blur-[49.5px]"></div>
        <div className="max-w-[618px] py-20 flex flex-col justify-center items-center mx-auto">
          <h4 className="text-4xl text-[#020202] font-bold mb-3.5">
            Contact us for more inquires
          </h4>
          <p className="text-base text-black opacity-[0.699999988079071] font-normal text-center mb-10">
            Porta quis volutpat ut ut amet. Pretium vulputate urna tortor vel
            eget fusce lorem proin. Pharetra dolor habitant ornare pharetra leo
            neque. Egestas at felis sed massa porta. Est volutpat id elit et.
          </p>
          <button className="py-3.5 px-12 text-white text-base font-semibold bg-primary rounded-[10px]">
            Contact now
          </button>
        </div>
      </div>
  );
};

export default Contact;
