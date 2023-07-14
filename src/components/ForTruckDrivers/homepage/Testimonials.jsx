import React from "react";
import { Testimonial } from "../../common/Helper";

const Testimonials = () => {
  return (
    <section>
      <div className="container lg:py-[120px] py-[50px]">
        <h2 className="text-center  font-bold text-4xl text-black">
          Testimonials
        </h2>
        <div className="flex flex-wrap lg:mt-[55px] xl:mt-[20px]">
          {Testimonial.map((obj, i) => {
            return (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" lg:w-1/3 my-[20px] "
                key={i}
              >
                <div className=" border-[1px]  border-solid lg:ms-[27px] border-[#e6e6e6] hover:border-[#fff] hover:shadow-Testimonalsshadow duration-200 cursor-pointer rounded-[9px] py-[32px] px-[28px]">
                  <div className="flex items-center">
                    <img src={obj.img} alt="textimonials" />
                    <div className=" ms-[26px]">
                      <p>{obj.name}</p>
                      <p>{obj.title}</p>
                    </div>
                  </div>
                  <p>{obj.pera}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
