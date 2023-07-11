import React from "react";
import OurTeam from "../../ForTruckDrivers/aboutus/OurTeam";
import Header from "../../common/Header";
import CommonHero from "../../common/CommonHero";
import WhatWeDo from "../../ForTruckDrivers/aboutus/WhatWeDo";
import TruckParking from "../../ForTruckDrivers/aboutus/TruckParking";
import ParkNation from "../../ForTruckDrivers/aboutus/ParkNation";
import Footer from "../../common/Footer";
import Contact from "../../common/Contact";

const AboutUs = () => {
  const commonHero = {
    h2: "About Us",
    herobg: "bg-AboutUs",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <TruckParking />
      <ParkNation />
      <OurTeam />
      <WhatWeDo />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutUs;
