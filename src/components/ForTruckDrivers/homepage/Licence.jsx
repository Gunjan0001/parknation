import React from "react";
import licence from "../../../assests/images/png/licence.png";
import redright from "../../../assests/images/png/redright.png";
const Licence = () => {
  return (
    <section className=" bg-[#f8f8f8]">
      <div className="container lg:py-[120px] py-[50px]">
        <div className="flex flex-wrap justify-center items-center">
          <div data-aos="zoom-in-right" className="lg:w-1/2 sm:w-4/5">
            <img
              className="w-full lg:pe-[36px]"
              src={licence}
              alt="licence section image"
            />
          </div>
          <div
            data-aos="zoom-in-left"
            className=" lg:w-1/2  xl:px-[40px] mt-2"
          >
            <p className="text-4xl font-bold text-black ">
              license Plate recognition
            </p>
            <p className="text-[#000000] xl:me-[70px] mt-[6px] text-base font-normal opacity-[.7]">
              Lectus enim ac purus fusce praesent tellus. Tincidunt tortor
              lectus porttitor donec tortor. In integer tempus nisl volutpat.{" "}
            </p>
            <div className="flex mt-[40px] flex-wrap">
              <div className="w-1/2">
                <img src={redright} alt="redright" />
                <p className=" font-semibold text-md text-[#000} mt-[10px]">
                  Consequat
                </p>
                <p className="text-[#000000] md:me-[40px] me-[15px] leading-[160%] text-base font-normal opacity-[.7]">
                  Dolor at fringilla nisl adipiscing et. Quisque fames urna
                  morbi id.
                </p>
              </div>{" "}
              <div className=" w-1/2">
                <img src={redright} alt="redright" />
                <p className=" font-semibold text-md text-[#000} mt-[10px]">
                  Ultricies
                </p>
                <p className="text-[#000000] text-base leading-[160%] md:me-[40px] font-normal opacity-[.7]">
                  Dolor at fringilla nisl adipiscing et. Quisque fames urna
                  morbi id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licence;
