import React from "react";
import truck_parking from "../../../assests/images/png/about_TruckParkingImg.png";

const TruckParking = () => {
  return (
    <>
      <section>
        <div className="container lg:pt-36 pt-12">
          <div className="flex flex-wrap justify-center">
            <div className="lg:w-1/2 xl:pr-20 lg:pr-10">
              <h2 className="text-black md:text-4xl text-2xl font-bold leading-normal">
                Creating New Opportunity for Truck Parking Enterprises
              </h2>
              <p className="mb-4 opacity-70 text-black text-base font-normal leading-relaxed">
                ParkNation are a team of industry experts who are focused on
                delivering valuable solutions for the trucking industry
                combining efficient, easy to use facilities with cutting edge
                technology in groundbreaking new ways.
              </p>
              <p className=" opacity-70 text-black text-base font-normal leading-relaxed">
                With our highly professional team and staff, we are dedicated to
                promoting safe trucking operations through our high capacity
                parking solution with wide drive aisles and oversized parking
                spaces for ease of use.
              </p>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-8">
              <img src={truck_parking} alt="truck_parking" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TruckParking;
