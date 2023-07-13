import React from "react";
import Hero from "../../ForTruckDrivers/homepage/Hero";
import HeroAboutUs from "../../ForTruckDrivers/homepage/HeroAboutUs";
import EvCharging from "../../ForTruckDrivers/homepage/EvCharging";
import HeroHowItWorks from "../../ForTruckDrivers/homepage/HeroHowItWorks";
import ParkingSpace from "../../ForTruckDrivers/homepage/ParkingSpace";
import Collaborate from "../../ForTruckDrivers/homepage/Collaborate";
import Camera from "../../ForTruckDrivers/homepage/Camera";
import ProcessOfDrivers from "../../ForTruckDrivers/homepage/ProcessOfDrivers";
// import Faq from "../../ForTruckDrivers/homepage/Faq";
const Homepage = () => {
  return (
    <>
      <Hero />
      <HeroAboutUs />
      <HeroHowItWorks />
      <ProcessOfDrivers />
      <EvCharging />
      <ParkingSpace />
      <Collaborate />
      <Camera />
      {/* <Faq /> */}
    </>
  );
};
export default Homepage;
