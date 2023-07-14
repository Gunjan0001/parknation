import React from "react";
import { SitesCardData } from "../../common/Helper";

const SitesCard = () => {
  return (
    <div className="container">
      <h3 className="lg:text-4xl md:text-3xl text-lg font-bold text-black">
        In Nevada 25 Sites
      </h3>
      <div className="flex flex-wrap lg:my-20 md:my-16 sm:my-10 my-3">
        {SitesCardData &&
          SitesCardData.map((obj, index) => {
            return (
              <div key={index} className="sm:w-1/2 lg:w-1/3 px-3 w-full lg:mt-0 mt-4">
                <div data-aos="zoom-out-down" className="rounded-[14px] shadow-allsitecard border-[2px] border-[transparent] hover:border-[2px] hover:border-[#EB2022] ease-linear duration-200">
                  <img
                    src={obj.SiteImg}
                    alt="SiteDriver"
                    className="w-full rounded-t-[14px]"
                  />
                  <div className="flex items-center justify-between px-[20px]
                  lg:mb-[47px] md:mb-[35px] mb-[28px] mt-[15px]">
                    <div className=" flex flex-col justify-center items-center ">
                      <p className="lg;text-base text-sm font-normal text-black opacity-50 ">
                        {obj.date}
                      </p>
                      <h4 className="lg:text-base text-sm font-semibold text-black">
                        {obj.SiteHead}
                      </h4>
                    </div>
                    <div>
                    <img
                      src={obj.SiteIcon}
                      alt="starIcon"
                      className="max-w-[130px]"
                    />
                  </div>
                  </div>
                  <h4 className="text-[#EB2022] text-md font-normal pb-[30px] px-[20px]">
                    {obj.days}
                  </h4>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SitesCard;
