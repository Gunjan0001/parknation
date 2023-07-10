import React from "react";
import manWearingHelmet from "../../../assests/images/png/manWearingHelmet.png";
const WhatWeDo = () => {
  return (
    <>
      <section>
        <div className="container py-10 mb-24">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 xl:pr-16 lg:pr-4">
              <h2 className=" text-black text-4xl font-bold xl:mb-4 mb-2">
                WHAT WE DO
              </h2>
              <p className="text-black text-base font-normal mb-4">
                Bringing the advantages of digital transformation to the
                transportation industry
              </p>
              <p className="opacity-70 text-black lg:text-base font-normal text-sm leading-relaxed lg:mb-11 mb-5">
                ParkNation brings the advantages of digital transformation to
                the transportation industry. Our platform helps truck parking
                enterprises integrate their operations within a single safe and
                reliable solution.
                <br />
                By building an intuitive, cloud-based software platform, modern
                truck parking enterprises are able to run safer, smarter
                operations across all of their locations.
                <br />
                Carriers, brokers, and truck drivers rely on our solution to
                make their operations safer, more easily compliant, and more
                profitable.
              </p>
              <button className="px-[26px] py-3.5 bg-red-600 rounded-[10px] text-neutral-50 text-base font-semibold leading-tight">
                Sign Up Now
              </button>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-11">
              <img src={manWearingHelmet} alt="manWearingHelmet" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
