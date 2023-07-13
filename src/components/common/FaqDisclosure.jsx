import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaqIcon } from "./Icon";

const FaqDisclosure = ({ obj, index, buttonRefs, openedRef }) => {
  const clickRecent = (index) => {
    const clickedButton =
      buttonRefs && buttonRefs.current && buttonRefs.current[index];
    if (clickedButton === openedRef && openedRef.current) {
      openedRef.current = null;
      return;
    }
    if (Boolean(openedRef && openedRef.current?.getAttribute("data-value"))) {
      openedRef && openedRef.current?.click();
    }
    openedRef.current = clickedButton;
  };
  return (
    <>
      <Disclosure
        className="py-3 border-b-2 border-[#E9EBED]"
        
      >
        {({ open }) => (
          <div>
            <Disclosure.Button
              as="div"
              className="flex justify-between items-center cursor-pointer disclosure-btn"
            >
              <span
                className="text-base font-medium font-Poppins max-w-[561px] "
                data-value={open}
                ref={(ref) => {
                  buttonRefs.current[index] = ref;
                }}
                onClick={() => clickRecent(index)}
              >
                {obj.questions}
              </span>
              <span>
                <FaqIcon />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className=" mt-3 text-base text-black opacity-70 max-w-[564px]">
              <span className="">{obj.answers}</span>
            </Disclosure.Panel>{" "}
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default FaqDisclosure;
