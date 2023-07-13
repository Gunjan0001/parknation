import React from "react";
import Header from "../../common/Header";
import FactSlider from "../../ForTruckDrivers/factPage/FactSlider";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";
import CommonHero from "../../common/CommonHero";

const FactPage = () => {
  const commonHero = {
    h2: "Facts",
    herobg: "bg-HowItWork",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <FactSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default FactPage;
