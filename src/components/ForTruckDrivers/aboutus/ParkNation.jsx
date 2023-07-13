import React from "react";
import truck_loading from "../../../assests/images/png/truckLoading_near_warehouse.png";

const ParkNation = () => {
  return (
    <>
      <section>
        <div className="container lg:pt-36 pt-12">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-center">
            <div className="lg:w-1/2 xl:pr-20 lg:pr-10 lg:mt-0 mt-8">
              <img src={truck_loading} alt="truck_loading" className="w-full max-w-[520px] mx-auto" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-black text-4xl font-bold">
                ParkNation is Looking Ahead
              </h2>
              <p className=" opacity-70 text-black md:text-base text-sm font-normal leading-relaxed lg:mb-11 mb-6">
                Our platform is just the beginning. We are also helping build
                new truck parking enterprises from the ground up, with
                comprehensive support for business planning, construction, and
                operations management.
                <br />
                The transport industry is expanding rapidly. At ParkNation, we
                are inspired to be the leading business partner for enterprises
                in the truck parking segment. Our experience, technology
                expertise, and operations leadership have positioned us as a
                preferred business partner.
              </p>
              <div className="w-[148px] h-[49px] px-[26px] py-3.5 bg-red-600 hover:bg-white hover:text-primary border border-primary duration-300 rounded-[10px] text-neutral-50 text-base font-semibold leading-tight">
                Sign Up Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParkNation;
