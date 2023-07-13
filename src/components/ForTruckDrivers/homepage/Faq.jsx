import React, { useRef } from "react";
import { Tab } from "@headlessui/react";
import FaqDisclosure from "../../common/FaqDisclosure";
import {
  customerOuestionsHomePage,
  faqTabsHomePage,
  techSupportOuestionsHomePage,
} from "../../common/Helper";
import FaqTabs from "../../common/FaqTabs";

const Faq = () => {
  const buttonRefs = useRef([]);
  const openedRef = useRef(null);

  return (
    <>
      <section className="container mx-auto xl:mb-16">
        <h2
          className="text-lg md:text-[32px] lg:text-xl font-bold font-Manrope text-center mb-16"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Frequently Asked Questions
        </h2>
        <Tab.Group as="div" className="xl:flex items-start justify-between">
          <Tab.List
            as="div"
            className="flex xl:flex-col xl:max-w-[364px] w-full xl:w-[364px]  "
          >
            {faqTabsHomePage &&
              faqTabsHomePage.map((obj, index) => (
                <FaqTabs obj={obj} key={index} />
              ))}
          </Tab.List>
          <Tab.Panels className="mt-6 xl:mt-0 xl:max-w-[680px] w-full xl:w-[680px] ">
            <Tab.Panel>
              {customerOuestionsHomePage &&
                customerOuestionsHomePage.map((obj, index) => (
                  <FaqDisclosure
                    obj={obj}
                    key={index}
                    index={index}
                    buttonRefs={buttonRefs}
                    openedRef={openedRef}
                  />
                ))}
            </Tab.Panel>
            <Tab.Panel>
              {techSupportOuestionsHomePage &&
                techSupportOuestionsHomePage.map((obj, index) => (
                  <FaqDisclosure
                    obj={obj}
                    key={index}
                    index={index}
                    buttonRefs={buttonRefs}
                    openedRef={openedRef}
                  />
                ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
};

export default Faq;
