import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Location = () => {
  const [startDate, setStartDate] = useState(new Date("04/04/2023"));
  const [endDate, setEndDate] = useState(new Date("04/04/2023"));
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div
            data-aos="flip-left"
            className="bg-white shadow-[0px_4px_76px_0px_rgba(0,0,0,0.16)] rounded-[10px] p-[30px]"
          >
            <h2 className=" text-[18px] md:text-md lg:text-lg font-semibold">
              Find Location
            </h2>
            <form
              action=""
              className="font-Poppins lg:flex items-end justify-between gap-10 mt-[30px]"
            >
              <div className=" sm:flex justify-between gap-6 md:gap-10 ">
                <div className="w-full sm:w-1/2  lg:max-w-[291px] xl:w-[291px]">
                  <label className="text-base w-full text-black block mb-[2px] mt-[19px]">
                    Location
                  </label>
                  <input
                    className="border-[1px] h-[41px] font-light  border-[#0505053D] font-Poppins text-[#4E4E4E] text-base rounded-[6px] bg-white  py-[11px] ps-2 mt-[10px]  focus:outline-primary w-full"
                    type="text"
                    required
                    placeholder="Location, 12345 USA"
                  />
                </div>
                <div className="w-full sm:w-1/2 lg:w-[155px] ">
                  <label className="text-base w-full text-black block mb-[2px] mt-[19px]">
                    From
                  </label>
                  <DatePicker
                    className="border-[1px] h-[41px] font-light mt-[10px] opacity-70  border-[#0505053D] rounded-[6px] font-Poppins text-[#4E4E4E] text-base bg-white  py-[11px] ps-2  focus:outline-primary w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                </div>
              </div>
              <div className=" sm:flex gap-6 md:gap-10  ">
                <div className="w-full sm:w-1/2 lg:max-w-[155px]">
                  <label className="text-base w-full text-black block mb-[2px] mt-[19px]">
                    To
                  </label>
                  <DatePicker
                    className="border-[1px] h-[41px] font-light mt-[10px] opacity-70 font-Poppins text-[#4E4E4E]   text-base border-[#0505053D] rounded-[6px] bg-white  py-[11px] ps-2  focus:outline-primary w-full "
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </div>
                <div className="w-full sm:w-1/2 lg:w-[163px]">
                  <label className="text-base w-full text-black block mb-[2px] mt-[19px]">
                    Space
                  </label>
                  <input
                    className="border-[1px] mt-[10px] font-light  h-[41px]  border-[#0505053D] font-Poppins text-[#4E4E4E]  text-base rounded-[6px] bg-white  py-[11px] ps-2  focus:outline-primary w-full"
                    type="number"
                    required
                    placeholder="01"
                  />
                </div>
              </div>
              <button className="px-[51px] h-[48px] mt-6 lg:mt-0 py-[13px]  border-[1px] border-primary  bg-primary rounded-[10px] text-white  hover:text-primary hover:bg-white duration-300  text-base font-semibold ">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
