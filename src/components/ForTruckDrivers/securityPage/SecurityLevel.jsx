import React from "react";
import { SecurityCardData } from "../../common/Helper";

const SecurityLevel = () => {
  return (
    <>
      <section className="container mt-16">
        <h2 className=" text-center text-black text-4xl font-bold mb-4">
          Enterprise level security
        </h2>
        <p className=" font-normal opacity-70 text-base text-center text-black max-w-[735px] mx-auto md:mb-16 pb-10">
          At auctor elit scelerisque fermentum. Arcu ut consequat morbi libero
          arcu purus consequat nec eu. Purus congue convallis ultricies id. Dui
          in dictumst fermentum sed morbi. Aliquam quis nulla egestas
          pellentesque neque accumsan at facilisis dolor. Nibh ac faucibus.
        </p>
        <div className="flex flex-wrap justify-center">
          {SecurityCardData &&
            SecurityCardData.map((obj, i) => {
              return (
                <div
                  data-aos="zoom-in-right"
                  className="md:w-1/2 w-full lg:mb-20 mb-10"
                  key={i}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center lg:gap-8 gap-5">
                    <img
                      src={obj.icon}
                      alt="icons"
                      className="w-full max-w-[80px] max-h-20"
                    />
                    <div>
                      <h2 className="mb-2 lg:max-w-[170px] text-md lg:text-start text-center font-bold capitalize text-black">
                        {obj.title}
                      </h2>
                      <p className="text-black lg:text-start text-center max-w-[332px] text-base opacity-70 font-normal">
                        {obj.para}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default SecurityLevel;
