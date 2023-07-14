import React from "react";
import cameraSection from "../../../assests/images/png/camerasection.png";
import rightbox from "../../../assests/images/png/rightbox.png";
const Camera = () => {
  return (
    <section className="bg-[#ffffff]">
      <div className="container md:py-[70px]">
        <div className="flex py-[50px] items-center flex-col-reverse lg:flex-row">
          <div data-aos="zoom-in-right" className="lg:w-1/2  xl:pe-[70px]">
            <p className="text-4xl font-bold text-black">
              24*7 Camera surveillance
            </p>
            <p className="text-[#000000] mt-[16px] text-base font-normal opacity-[.7]">
              Nibh mauris dignissim sit imperdiet adipiscing feugiat in lectus.
              Pellentesque tortor nunc orci volutpat at adipiscing donec
              pellentesque. Fermentum tellus iaculis quisque et turpis purus.
            </p>
            <div className="flex items-center mt-[20px]">
              <img
                className=" w-[16px] lg:w-[21px]"
                src={rightbox}
                alt="rightbox"
              />
              <p className="ps-[10px] font-normal text-base text-[#000000] opacity-[.7]">
                Adipiscing placerat nulla cursus platea feugiat arcu. Tristique.
              </p>
            </div>
            <div className="flex items-center mt-[12px]">
              <img
                className=" w-[16px] lg:w-[21px]"
                src={rightbox}
                alt="rightbox"
              />
              <p className="ps-[10px] font-normal text-base text-[#000000] opacity-[.7]">
                Curabitur orci eget turpis ut bibendum eget facilisis pulvinar.
              </p>
            </div>
            <div className="flex items-center mt-[12px]">
              <img
                className=" w-[16px] lg:w-[21px]"
                src={rightbox}
                alt="rightbox"
              />
              <p className="ps-[10px] font-normal text-base text-[#000000] opacity-[.7]">
                Purus nisi vulputate etiam mauris orci faucibus ligula ut. Sed.
              </p>
            </div>
            <div className="flex items-center mt-[12px]">
              <img
                className=" w-[16px] lg:w-[21px]"
                src={rightbox}
                alt="rightbox"
              />
              <p className="ps-[10px] font-normal text-base text-[#000000] opacity-[.7]">
                Blandit mauris vestibulum in tincidunt nisi sagittis nisi eget.
                Ac.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="md:w-4/5 lg:w-1/2 lg:ps-[50px]"
          >
            <img
              className="w-100"
              src={cameraSection}
              alt="cameraSectionimage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
