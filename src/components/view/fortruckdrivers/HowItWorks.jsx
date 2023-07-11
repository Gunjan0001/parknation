import React from "react";
import Header from "../../common/Header";
import Benifits from "../../ForTruckDrivers/howitwork/Benifits";
import CommonHero from "../../common/CommonHero";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";
const HowItWorks = () => {
  const commonHero = {
    h2: "How it works",
    herobg: "bg-HowItWork",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <Benifits />
      <Contact />
      <Footer />
    </>
  );
};

export default HowItWorks;
