import React, { useRef } from "react";
import Slider from "react-slick";
import truck from "../../../assests/images/png/truck_img.png";
import { LeftArrowRed, RightArrowRed } from "../../common/Icon";

const FactSlider = () => {
  const slider = useRef();
   var settings = {
     dots: false,
     infinite: true,
     speed: 300,
     cssEase: "linear",
     arrows: false,
     slidesToShow: 1,
     fade: true,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 1400,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
  return (
    <>
      <section>
        <div className="container lg:mt-36 lg:mb-40 my-10">
          <Slider ref={slider} {...settings}>
            <div className="px-2">
              <div className="flex flex-wrap items-center w-full">
                <div className="lg:w-1/2">
                  <img src={truck} alt="truck" />
                </div>
                <div className="lg:w-1/2 lg:ps-12 lg:mt-0 mt-5">
                  <p className=" text-black text-2xl font-normal lg:mb-14 mb-5">
                    Trucking is essential for the U.S. Economy. A 2022 survey
                    showed that when measured by weight, 72.5% of American
                    freight was transported by truck. In 2021, there were around
                    4 million semi-trucks operating in the country
                  </p>
                  <div className="flex gap-4">
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickPrev()}
                    >
                      <LeftArrowRed />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickNext()}
                    >
                      <RightArrowRed />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex flex-wrap items-center w-full">
                <div className="lg:w-1/2">
                  <img src={truck} alt="truck" />
                </div>
                <div className="lg:w-1/2 lg:ps-12 lg:mt-0 mt-5">
                  <p className=" text-black text-2xl font-normal lg:mb-14 mb-5">
                    In 2021, there were around 4 million semi-trucks operating
                    in the country Trucking is essential for the U.S. Economy. A
                    2022 survey showed that when measured by weight, 72.5% of
                    American freight was transported by truck.
                  </p>
                  <div className="flex gap-4">
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickPrev()}
                    >
                      <LeftArrowRed />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickNext()}
                    >
                      <RightArrowRed />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex flex-wrap items-center w-full">
                <div className="lg:w-1/2">
                  <img src={truck} alt="truck" />
                </div>
                <div className="lg:w-1/2 lg:ps-12 lg:mt-0 mt-5">
                  <p className=" text-black text-2xl font-normal lg:mb-14 mb-5">
                    Trucking is essential for there were around 4 million
                    semi-trucks operating in the country the U.S. Economy. A
                    2022 survey showed that when measured by weight, 72.5% of
                    American freight was transported by truck. In 2021,
                  </p>
                  <div className="flex gap-4">
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickPrev()}
                    >
                      <LeftArrowRed />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => slider.current.slickNext()}
                    >
                      <RightArrowRed />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FactSlider;
