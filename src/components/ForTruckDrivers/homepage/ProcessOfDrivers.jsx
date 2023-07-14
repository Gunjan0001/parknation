import React, { useState } from "react";
import truck_video from "../../../assests/images/png/truck_video.png";
import { VideoPlayicon } from "../../common/Icon";

const ProcessOfDrivers = () => {
  const [Show, setShow] = useState(false);

  return (
    <>
      <section>
        <div className="container py-7">
          <h2 className="lg:mb-20 mb-10 text-center text-4xl font-bold text-black">
            The Process for truck drivers
          </h2>
          <div
            onClick={() => setShow(!Show)}
            className=" relative"
            data-aos="fade-down"
          >
            {Show ? (
              <div className=" text-center rounded-xl border-[20px] border-[#C9CCD3]">
                <iframe
                  width="100%"
                  height="530"
                  src="https://www.youtube.com/embed/2QT9fDXikHE"
                  title="क्या होती है कोडिंग समझिये मेरे साथ अपनी ज़बान में और आसानी से | What is Coding ?"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <>
                {" "}
                <img
                  src={truck_video}
                  alt="truck_video"
                  className=" rounded-xl border-[20px] border-[#C9CCD3]"
                />
              </>
            )}
            {Show ? (
              <> </>
            ) : (
              <>
                <VideoPlayicon />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessOfDrivers;
