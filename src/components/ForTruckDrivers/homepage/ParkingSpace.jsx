import React from "react";
import parkingspace from "../../../assests/images/png/parkingspace.png";
const ParkingSpace = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container">
        <div
          className="flex flex-wrap pb-[40px] lg:pb-[0px] items-center justify-center"
        >
          <div className=" md:w-4/5 lg:w-1/2 lg:px-[0px] sm:px-[50px] px-[30px]  lg:py-[100px] sm:pb-[50px] pt-[50px] pb-[20px] ">
            <img
              className="w-full xl:pe-[50px]"
              src={parkingspace}
              alt="parkingspace"
            />
          </div>
          <div className="lg:w-1/2 lg:ps-[52px] xl:pe-[80px]">
            <h3 className=" text-black font-bold text-4xl xl:pe-[30px]">
              Parking spaces and their status
            </h3>
            <p className=" opacity-[.7] my-[16px] text-base font-normal text-[#000]">
              Sit blandit aliquam nascetur augue justo aliquet. Est aliquam est
              mauris in ornare at cras. Neque odio pellentesque felis malesuada
              scelerisque dui. Orci tortor.
            </p>
            <p className=" opacity-[.7] text-base font-normal text-[#000]">
              Id fringilla ultricies non dui ornare. Massa egestas id pharetra
              malesuada consequat ultrices sit in. Lorem imperdiet platea duis
              ut in fames posuere. Ante tristique.
            </p>
            <button className=" mt-[35px] text-base text-primary font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] hover:text-white hover:bg-primary duration-300 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingSpace;
