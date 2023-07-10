import React from "react";
import { BenifitsData } from "../../common/Helper";
const Benifits = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2>Benefits of as a our customer</h2>
          <div className="flex flex-wrap">
            {BenifitsData &&
              BenifitsData.map((obj, i) => {
                return (
                  <div className="w-1/4 flex justify-center">
                    <img src={obj.img} alt="" />
                    <h2>{obj.head}</h2>
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
