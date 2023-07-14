import React from "react";
import { BenifitsData } from "../../common/Helper";
const Benifits = () => {
  return (
    <>
      <section>
        <div className="container py-20">
          <div className="text-black text-center text-3xl font-bold xl:mb-20 mb-10">
            Benefits of as a our customer
          </div>
          <div
            data-aos="zoom-in-right"
            className="flex flex-wrap justify-center xl:gap-20 lg:gap-16 gap-10"
          >
            {BenifitsData &&
              BenifitsData.map((obj, i) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[200px]"
                    key={i}
                  >
                    <span> {obj.benefitImg}</span>
                    <h2 className="text-black text-md font-bold capitalize max-w-[190px] mx-auto text-center mt-4">
                      {obj.head}
                    </h2>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benifits;
