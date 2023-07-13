import React from "react";
import truck_video from "../../../assests/images/png/truck_video.png";
import { VideoPlayicon } from "../../common/Icon";

const ProcessOfDrivers = () => {
  return (
    <>
      <section>
        <div className="container py-7">
          <h2 className="lg:mb-20 mb-10 text-center text-4xl font-bold text-black">
            The Process for truck drivers
          </h2>
          <div className=" relative">
            <img
              src={truck_video}
              alt="truck_video"
              className=" rounded-xl border-[20px] border-[#C9CCD3]"
            />
            <VideoPlayicon />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessOfDrivers;
