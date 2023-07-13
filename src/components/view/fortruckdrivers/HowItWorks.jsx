import React from "react";
import Header from "../../common/Header";
import Benifits from "../../ForTruckDrivers/howitwork/Benifits";
import CommonHero from "../../common/CommonHero";
import HeroHowItWorks from "../../ForTruckDrivers/homepage/HeroHowItWorks";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";
import ProcessOfDrivers from "../../ForTruckDrivers/homepage/ProcessOfDrivers";

const HowItWorks = () => {
  const commonHero = {
    h2: "How it works",
    herobg: "bg-HowItWork",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <HeroHowItWorks />
      <Benifits />
      <ProcessOfDrivers />
      <Contact />
      <Footer />
    </>
  );
};

export default HowItWorks;
