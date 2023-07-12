import React from "react";

const Collaborate = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-collboratebg py-[50px]">
      <div className="container sm:py-[50px] md:my-[50px]">
        <div className=" max-w-[600px] lg:py-[70px] ">
          <h3 className="font-extrabold text-black leading-[130%] text-6xl">
            Collaborate to innovate:{" "}
            <span className="text-primary">Partner with us</span> for success.
          </h3>
          <button className=" md:mt-[40px] mt-[30px] text-base hover:text-primary ms-[10px] hover:bg-white font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
