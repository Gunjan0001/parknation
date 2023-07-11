import React from "react";
import { SitesCardData } from "../../common/Helper";

const SitesCard = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        {SitesCardData &&
          SitesCardData.map((obj, index) => {
            return (
              <div key={index} className="sm:w-1/2 lg:w-1/3">
                <div className="bg-[#F2F3F4] rounded-[10px]">
                  <img src={obj.SiteImg} alt="SiteDriver" className="w-full" />
                  <div className="flex items-center justify-between lg:mb-[47px] md:mb-[35px] mb-[28px] mt-[15px] px-[20px]">
                    <p className="lg;text-base text-sm font-normal text-black opacity-50 ">
                      {obj.date}
                    </p>
                    <h4 className="lg:text-base text-sm font-semibold text-black">
                      {obj.SiteHead}
                    </h4>
                  </div>
                  <img src={obj.SiteIcon} alt="starIcon" className="w-full" />
                </div>
                <h4 className="text-[#EB2022] text-md font-normal mb-[30px]">{obj.days}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SitesCard;
