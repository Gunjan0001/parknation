import React from "react";
import security_img from "../../../assests/images/png/bestSecurity_img.png";

const ProvideBestSecurity = () => {
  return (
    <>
      <section className="container mt-5 mb-20">
        <div className="flex flex-wrap items-center">
          <div className="md:w-1/2 w-full">
            <h2 className="mb-4 text-black lg:text-4xl text-3xl font-bold">
              We Try To Provides Best Security
            </h2>
            <p className="text-black text-base opacity-70 mb-10">
              Lectus bibendum malesuada arcu in eu placerat ut lorem morbi. Ut
              amet integer facilisi convallis dolor tristique. Dignissim
              ultrices lectus dictum phasellus eget habitant. Netus in
              adipiscing donec suscipit donec. Nam quis convallis semper nam
              elit augue sit arcu. Accumsan id suscipit integer quis dui non sed
              pretium ipsum.
            </p>
            <button className=" py-[14px] px-[26px] text-white bg-primary  border-[1px] border-primary hover:text-primary hover:bg-white duration-300 rounded-[10px]">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={security_img} alt="security_img" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProvideBestSecurity;
