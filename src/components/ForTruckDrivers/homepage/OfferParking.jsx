import React from "react";
import { Offers } from "../../common/Helper";

const OfferParking = () => {
  return (
    <section>
      <div className="container lg:pt-[120px] lg:pb-[80px] py-[50px]">
        <h2 className=" md:mb-[40px] text-center font-bold text-4xl text-black">
          What we offer’s in our parking
        </h2>
        <div className="flex flex-wrap">
          {Offers.map((obj, i) => {
            return (
              <div key={i} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full text-center my-[40px] ">
                <img
                  className=" w-[80px] mx-auto cursor-pointer"
                  src={obj.icon}
                  alt="offerparking"
                />
                <p className=" mt-[16px] font-bold text-md text-black max-w-[182px] mx-auto">
                  {obj.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferParking;
