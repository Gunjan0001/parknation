import React, { useState } from "react";
import { Rightsidearrow } from "../../common/Icon";

const HeroHowItWorks = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="bg-[#f8f8f8]">
      <div className=" py-[100px] container">
        <h2 className="text-center font-bold text-4xl text-black">
          How it works
        </h2>
        <div className=" bg-[#ffffff] py-[24px] px-[28px] rounded-[20px]">
          <p className=" text-black font-bold mb-[30px] text-xl ">
            Sign up as a customer
          </p>
          <div className="flex overflow-x-scroll">
            <div className="flex border-b-[1px] cursor-pointer">
              <p className=" font-semibold text-black text-base whitespace-nowrap">
                Convenient, simple parking
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div className="flex ps-[33px] border-b-[1px] cursor-pointer">
              <p className=" font-semibold text-black text-base whitespace-nowrap">
                Free registration
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div className="flex ps-[33px] border-b-[1px] cursor-pointer">
              <p className=" font-semibold text-black text-base whitespace-nowrap">
                Reserve in advance
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div className="flex px-[33px] border-b-[1px] cursor-pointer">
              <p className=" font-semibold text-black text-base whitespace-nowrap">
                Wide aisles and large parking spaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHowItWorks;
