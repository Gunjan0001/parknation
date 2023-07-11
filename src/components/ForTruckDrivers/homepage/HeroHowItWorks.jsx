import React, { useState } from "react";
import { Rightsidearrow } from "../../common/Icon";
import redcar from "../../../assests/images/png/redcar.png";
const HeroHowItWorks = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="bg-[#f8f8f8]">
      <div className=" lg:py-[100px] py-[50px] container">
        <h2 className="text-center font-bold text-4xl mb-[6 0px] text-black">
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
          <div>
            <div className="flex mt-[26px] lg:ms-[50px]">
              <img src={redcar} alt="redcar how its wroks" />
              <div className="ms-[46px]">
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Lorem ipsum dolor sit amet consectetur. Dignissim sit euismod
                  dictumst id duis felis sed. Hendrerit
                </p>
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Lorem ipsum dolor sit amet consectetur. Dignissim sit euismod
                  dictumst id duis felis sed. Hendrerit
                </p>
              </div>
            </div>
          </div>
          <div className="text-end">
            {" "}
            <button className=" text-base hover:text-primary ms-[10px] hover:bg-white font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300 ">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHowItWorks;
