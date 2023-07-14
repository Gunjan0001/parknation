import React from "react";
import HeroSectionAboutUsMenWithTruck from "../../../assests/images/webp/HeroSectionAboutUSMenWithTruck.webp";

const HeroAboutUs = () => {
  return (
    <div className="container">
      <div className="lg:flex items-center justify-between lg:py-32 md:py-24 sm:py-20 py-6">
        <div className="lg:w-2/5 md:full relative " data-aos="fade-right">
          <img
            src={HeroSectionAboutUsMenWithTruck}
            alt="HeroSectionAboutUsMenWithTruck"
          />
        </div>
        <div className="lg:w-1/2 md:5/6 px-2" data-aos="fade-left">
          <h4 className="l:text-4xl text-3xl font-bold text-[#020202] lg:mb-4 mb-3">
            About us
          </h4>
          <p className="lg:text-base text-sm font-normal text-black opacity-[0.699999988079071] lg:mb-5 mb-3">
            ParkNation are a team of industry experts who are focused on
            delivering valuable solutions for the trucking industry combining
            efficient, easy to use facilities with cutting edge technology in
            groundbreaking new ways.
          </p>
          <p className="lg:text-base text-sm font-normal text-black opacity-[0.699999988079071] lg:mb-6 mb-4">
            With our highly professional team and staff, we are dedicated to
            promoting safe trucking operations through our high capacity parking
            solution with wide drive aisles and oversized parking spaces for
            ease of use.
          </p>
          <button className="text-base text-[#EB2022] font-semibold lg:px-7 px-5 lg:py-4 py-3 border border-[#EB2022] rounded-[10px] hover:text-white hover:bg-[#EB2022] transition-all duration:200 ease-linear">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutUs;
