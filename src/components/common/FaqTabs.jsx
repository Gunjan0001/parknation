import React from "react";
import { TabArrowIcon } from "./Icon";
import { Tab } from "@headlessui/react";

const FaqTabs = ({ obj }) => {
  return (
    <>
      <div className="border-b-2 border-[#E9EBED]">
        <Tab
          className="headless-ui-tab-btn text-base sm:text-[18px] lg:text-md font-medium font-Manrope w-full border-0 aria-selected:bg-secondary aria-selected:text-white flex justify-between items-center py-5 sm:py-[26px] pl-2 sm:pl-3 pr-2 sm:pr-4 focus:border-0 focus:outline-0"
        
        >
          {obj.heading}
          <span>
            <TabArrowIcon />
          </span>
        </Tab>
      </div>
    </>
  );
};

export default FaqTabs;
