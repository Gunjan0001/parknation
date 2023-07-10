import React from "react";
import OurTeam from "../../ForTruckDrivers/aboutus/OurTeam";
import Header from "../../common/Header";
import CommonHero from "../../common/CommonHero";
import WhatWeDo from "../../ForTruckDrivers/aboutus/WhatWeDo";
import TruckParking from "../../ForTruckDrivers/aboutus/TruckParking";
import ParkNation from "../../ForTruckDrivers/aboutus/ParkNation";

const AboutUs = () => {
  const commonHero = {
    h2: "About Us",
    herobg: "bg-security",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <TruckParking />
      <ParkNation />
      <OurTeam />
      <WhatWeDo />
    </>
  );
};

export default AboutUs;
