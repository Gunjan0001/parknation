import React from "react";
import MenWithMobile from "../../../assests/images/webp/MenWithMobile.webp";
import MenWithMobileTruck from "../../../assests/images/webp/Blog-detailMenWithMobileTruck.webp";


const Management = () => {
  return (
    <>
      <div className="container">
        <div className="max-w-[873px]">
          <h2 className="text-4xl text-black font-bold mb-[17px]">
            Excel spreadsheets make it difficult to scale, collaborate, and
            organize documents, as there is no document management
          </h2>
          <div className="flex gap-20 mb-8">
            <p className="text-base font-normal text-black opacity-[0.699999988079071]">
              Published on March: 24/2023
            </p>
            <p className="text-base font-normal text-black opacity-[0.699999988079071]">
              Read Time: 6 min
            </p>
          </div>
          <img
            src={MenWithMobile}
            alt=""
            className="border-transparent rounded-[20px] mb-16 p-2"
          />
          <h3 className="text-md font-bold text-[#020202] mb-4">
            TLDR - Here's what you need to know:
          </h3>
          <ul className="list-disc ml-5">
            <li className="text-base text-black opacity-[0.699999988079071] mb-4 font-normal">
              Excel spreadsheets make it difficult to scale, collaborate, and
              organize documents, as there is no document management
            </li>
            <li className="text-base text-black opacity-[0.699999988079071] mb-4 font-normal">
              On-premise TMS systems require physical servers located at your
              office, which are often costly both to purchase and maintain. You
              also need to worry about security & privacy
            </li>
            <li className="text-base text-black opacity-[0.699999988079071] font-normal">
              The Rose Rocket TMS is cloud-based, secure & private, helps
              streamline collaboration, and future-proof your business. Learn
              more about cloud-based TMS software.
            </li>
          </ul>
          <p className="text-base text-black opacity-[0.699999988079071] mt-7 font-normal">
            There are many options on the market that can run your business —
            like building out an extensive Excel spreadsheets or an on-premise
            TMS. There’s also cloud-based systems, which is what we, Rose
            Rocket, are.
          </p>
          <h6 className="text-base text-black font-medium mt-10">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="text-base font-normal text-black opacity-[0.699999988079071] mt-4 mb-10">
            In the below video, our Key Account Lead, Rob Doherty explains the
            pros and cons of using Excel spreadsheets, an on-premise TMS system,
            and Rose Rocket to run your business. Prior to joining Rose Rocket,
            he worked in trucking for many years and was the General Manager at
            a trucking company, so knows first hand how important it is to have
            the best tools for your business to help optimize efficiency and
            productivity.
          </p>
          <h6 className="text-base text-black font-medium">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="text-base font-normal text-black opacity-[0.699999988079071] mt-4 mb-10">
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
            className="border-transparent rounded-[20px] mb-10"
          />
          <h6 className="text-base text-black font-medium">
            Something needs to change, now. Things can’t keep running like they
            are. As you start researching transportation management softwares
            that can help you streamline and automate your business operations,
            you start to wonder, what’s the difference between all these
            softwares?
          </h6>
          <p className="text-base font-normal text-black opacity-[0.699999988079071] mt-4">
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
