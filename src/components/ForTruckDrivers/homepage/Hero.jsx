import React from "react";
import Header from "../../common/Header";

const Hero = () => {
  return (
    <div className="xl:min-h-screen flex flex-col bg-herobg bg-cover bg-no-repeat">
      <Header />
      <div className="xl:grow flex flex-col items-center justify-center">
        <div className="container ">
          <div className="max-w-[528px] mt-[70px] ">
            <h1 className=" font-extrabold text-6xl text-black leading-[130%]">
              Truck Parking Made{" "}
              <span className="text-primary font-bold">Hassle-Free.</span>
            </h1>
            <p className=" text-base mt-[16px] text-black font-normal">
              ParkNation provides trusted, highly secure truck parking for
              drivers and driver-owners needing a safe, reliable space for their
              vehicle in New Jersey
            </p>
            <div className="max-w-[458px] rounded-[10px] p-[24px] my-[40px] flex justify-between flex-wrap  bg-white border-[1px] border-solid border-[#ffffff] border-opacity-[0.02] ">
              <div className="sm:w-[50%] w-full sm:ps-[0px] ps-[12px]  sm:pe-[12px]">
                <p className=" font-normal text-base text-black">Location</p>
                <input
                  type="text"
                  className=" w-full border-[1px] border-solid p-[10px] rounded-[6px] mt-[4px]  border-[black] border-opacity-[24%]"
                  placeholder="Location, 12345 USA"
                />
              </div>
              <div className="sm:w-[50%] w-full ps-[12px]">
                <p className=" font-normal text-base text-black">Space</p>
                <input
                  type="text"
                  className=" w-full border-[1px] border-solid p-[10px] rounded-[6px] mt-[4px]  border-[black] border-opacity-[24%]"
                  placeholder="1"
                />
              </div>
              <div className="sm:w-[50%] w-full sm:pe-[12px] sm:ps-[0px] ps-[12px] pt-[12px]">
                <p className=" font-normal text-base text-black">From</p>
                <input
                  type="text"
                  className=" w-full border-[1px] border-solid p-[10px] rounded-[6px] mt-[4px]  border-[black] border-opacity-[24%]"
                  placeholder="04/04/2023"
                />
              </div>{" "}
              <div className="sm:w-[50%] w-full ps-[12px] pt-[12px]">
                <p className=" font-normal text-base text-black">To</p>
                <input
                  type="text"
                  className=" w-full border-[1px] border-solid p-[10px] rounded-[6px] mt-[4px]  border-[black] border-opacity-[24%]"
                  placeholder="05/04/2023"
                />
              </div>
              <button className=" py-[14px] w-full text-base hover:text-primary ms-[10px] hover:bg-white font-semibold mt-[24px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300  ">
                Search here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
