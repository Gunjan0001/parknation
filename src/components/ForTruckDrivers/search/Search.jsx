import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import track1 from "../../../assests/images/webp/search_track1.webp";
import track2 from "../../../assests/images/webp/search_track2.webp";
import map from "../../../assests/images/png/map.png";
import { LeftArrowRed, RightArrowRed } from "../../common/Icon";
import { LocationInformationsData } from "../../common/Helper";

const Search = () => {
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 0.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" container lg:mt-[100px]">
        <div className="flex justify-between w-full flex-col lg:flex-row">
          <div className="lg:w-[47%] my-10 lg:mt-0">
            <div className="flex items-center w-full justify-between lg:pr-[40px]">
              <p className="font-normal text-[18px] lg:text-[22px] text-[#020202] font-Poppins">
                Usa 2343
              </p>
              <p className="font-semibold text-[18px] lg:text-[22px] text-[#EB2022] font-Poppins">
                $40.00
              </p>
            </div>
            <div className="relative ">
              <div
                className="absolute left-0 top-[45%] cursor-pointer"
                onClick={() => slider.current.slickPrev()}
              >
                <LeftArrowRed />
              </div>
              <div className="pl-[45px] pr-[45px] lg:pr-[30px] mt-[30px] ">
                <Slider ref={slider} {...settings}>
                  <div className="overflow-hidden rounded-lg md:!h-[188px]">
                    <img
                      className="px-2 xs:w-full xs:h-full"
                      src={track1}
                      alt="haighway"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg md:!h-[188px]">
                    <img
                      className="px-2  xs:w-full xs:h-full"
                      src={track2}
                      alt="haighway"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg md:!h-[188px]">
                    <img
                      className="px-2  xs:w-full xs:h-full"
                      src={track1}
                      alt="haighway"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg md:!h-[188px]">
                    <img
                      className="px-2  xs:w-full xs:h-full"
                      src={track2}
                      alt="haighway"
                    />
                  </div>
                </Slider>
              </div>
              <div
                className="absolute right-2 lg:-right-0 top-[45%] cursor-pointer"
                onClick={() => slider.current.slickNext()}
              >
                <RightArrowRed />
              </div>
            </div>
            <p className="font-Poppins font-semibold text-[18px] md:text-md lg:text-lg mt-[31px] mb-4 text-[#020202]">
              Description
            </p>
            <p className="font-normal font-Poppins opacity-70 text-base">
              Lorem ipsum dolor sit amet consectetur. Dignissim sit euismod
              dictumst id duis felis sed. Hendrerit Lorem ipsum dolor sit amet
            </p>
            <div className="bg-[#F8F8F8] mt-[30px] p-[18px]">
              <p className="font-semibold font-Poppins text-[#020202]  text-[18px] md:text-md lg:text-lg">
                Location Features
              </p>
              <div className=" grid sm:grid-cols-2 gap-x-6">
                {LocationInformationsData.map((item, index) => {
                  return (
                    <div
                      className="lg:max-w-[219px] flex items-start mt-4"
                      key={index}
                    >
                      <span>{item.icon}</span>
                      <p className="font-normal font-Poppins text-base text-[#020202] ml-2">
                        {item.heading}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="font-semibold font-Poppins mt-[30px] text-[18px] md:text-md lg:text-lg text-[#020202]">
              Prices
            </p>
            <div className="flex">
              <div className="mt-4">
                <p className="font-semibold text-[#020202] text-base font-Poppins">
                  Type
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#020202]">
                  Container/Chassis (20'/40'/45')
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#020202]">
                  Heavy Truck
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#020202]">
                  Ev Charging
                </p>
              </div>
              <div className="mt-4 ms-[20px] sm:ms-[64px]">
                <p className="font-semibold text-[#020202] text-base font-Poppins">
                  Price/day
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#EB2022]">
                  $40.00
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#EB2022]">
                  $50.00
                </p>
                <p className="mt-4 font-Poppins font-normal text-base text-[#EB2022]">
                  $70.00
                </p>
              </div>
            </div>
            <button className="px-[51px] h-[49px] py-[12px] text-base font-semibold bg-primary text-white  border-[1px] border-primary hover:text-primary hover:bg-white duration-300  mt-[53px]">
              Book Now
            </button>
          </div>
          <div className="w-full lg:w-[50%] mx-auto lg:mr-auto">
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
