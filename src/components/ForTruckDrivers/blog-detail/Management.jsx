import React from "react";
import MenWithMobile from "../../../assests/images/webp/MenWithMobile.webp";
import MenWithMobileTruck from "../../../assests/images/webp/Blog-detailMenWithMobileTruck.webp";

const Management = () => {
  return (
    <>
      <div className="container mt-[70px]">
        <div className="lg:max-w-[873px] w-full">
          <h2 className="lg:text-4xl md:text-3xl text-md text-black font-bold lg:mb-[17px] mb-[12px] leading-normal">
            Excel spreadsheets make it difficult to scale, collaborate, and
            organize documents, as there is no document management
          </h2>
          <div className="lg:flex md:flex sm:flex flex-wrap gap-20 lg:mb-8 mb-4">
            <p className="lg:text-base text-sm font-normal text-black opacity-70 sm:mb-0 mb-3">
              Published on March: 24/2023
            </p>
            <p className="lg:text-base text-sm font-normal text-black opacity-70">
              Read Time: 6 min
            </p>
          </div>
          <img
            src={MenWithMobile}
            alt=""
            className="border-transparent rounded-[20px] lg:mb-16 md:mb-10 mb-4 w-full"
          />
          <h3 className="lg:text-md text-base font-bold text-[#020202] lg:mb-4 mb-3">
            TLDR - Here's what you need to know:
          </h3>
          <ul className="list-disc ml-5">
            <li className="lg:text-base text-sm text-black opacity-70 lg:mb-4 mb-3 font-normal">
              Excel spreadsheets make it difficult to scale, collaborate, and
              organize documents, as there is no document management
            </li>
            <li className="lg:text-base text-sm text-black opacity-70 lg:mb-4 mb-3 font-normal">
              On-premise TMS systems require physical servers located at your
              office, which are often costly both to purchase and maintain. You
              also need to worry about security & privacy
            </li>
            <li className="lg:text-base text-sm text-black opacity-70 font-normal">
              The Rose Rocket TMS is cloud-based, secure & private, helps
              streamline collaboration, and future-proof your business. Learn
              more about cloud-based TMS software.
            </li>
          </ul>
          <p className="lg:text-base text-sm text-black opacity-70 lg:mt-7 mt-4 font-normal">
            There are many options on the market that can run your business —
            like building out an extensive Excel spreadsheets or an on-premise
            TMS. There’s also cloud-based systems, which is what we, Rose
            Rocket, are.
          </p>
          <h6 className="lg:text-base text-sm text-black font-medium lg:mt-10 mt-5">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="lg:text-base text-sm font-normal text-black opacity-70 mt-4 lg:mb-10 mb-5">
            In the below video, our Key Account Lead, Rob Doherty explains the
            pros and cons of using Excel spreadsheets, an on-premise TMS system,
            and Rose Rocket to run your business. Prior to joining Rose Rocket,
            he worked in trucking for many years and was the General Manager at
            a trucking company, so knows first hand how important it is to have
            the best tools for your business to help optimize efficiency and
            productivity.
          </p>
          <h6 className="lg:text-base text-sm text-black font-medium">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="lg:text-base text-sm font-normal text-black opacity-70 mt-4 lg:mb-10 mb-5">
            In the below video, our Key Account Lead, Rob Doherty explains the
            pros and cons of using Excel spreadsheets, an on-premise TMS system,
            and Rose Rocket to run your business. Prior to joining Rose Rocket,
            he worked in trucking for many years and was the General Manager at
            a trucking company, so knows first hand how important it is to have
            the best tools for your business to help optimize efficiency and
            productivity.
          </p>
          <img
            src={MenWithMobileTruck}
            alt=""
            className="border-transparent rounded-[20px] lg:mb-10 mb-5"
          />
          <h6 className="lg:text-base text-sm text-black font-medium">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="lg:text-base text-sm font-normal text-black opacity-70 mt-4">
            In the below video, our Key Account Lead, Rob Doherty explains the
            pros and cons of using Excel spreadsheets, an on-premise TMS system,
            and Rose Rocket to run your business. Prior to joining Rose Rocket,
            he worked in trucking for many years and was the General Manager at
            a trucking company, so knows first hand how important it is to have
            the best tools for your business to help optimize efficiency and
            productivity.
          </p>
        </div>
      </div>
    </>
  );
};

export default Management;
