import React from "react";
import { TeamCardsData } from "../../common/Helper";

const OurTeam = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] lg:py-24 py-10">
        <div className="container">
          <h2 className=" text-center text-black text-4xl font-bold">
            Our Team
          </h2>
          <p className=" text-center text-black font-normal text-base opacity-70 max-w-[704px] mx-auto lg:mb-16 mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
          </p>
          <div className="flex flex-wrap justify-center items-center">
            {TeamCardsData &&
              TeamCardsData.map((obj, i) => {
                return (
                  <div className="lg:w-1/3 sm:w-1/2 mt-4 px-3 rounded-[10px]">
                    <div className=" hover:shadow-2xl duration-300">
                      <img
                        data-aos="zoom-out-up"
                        src={obj.teamImg}
                        alt="team member"
                        className="w-full"
                      />
                      <div
                        data-aos="zoom-out-right"
                        className="px-4 pt-4 pb-6 bg-[#F2F3F4] rounded-b-[10px]"
                      >
                        <p className=" mb-1 font-normal text-base text-[#000] opacity-40">
                          {obj.position}
                        </p>
                        <h2 className=" mb-3 text-[#000] font-normal text-md">
                          {obj.name}
                        </h2>
                        <p className=" font-normal text-base text-[#000] opacity-40">
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
