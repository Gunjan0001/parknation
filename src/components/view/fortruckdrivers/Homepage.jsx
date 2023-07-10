import React from "react";
import Header from "../../common/Header";
import HeroAboutUs from "../../ForTruckDrivers/homepage/HeroAboutUs"
import EvCharging from '../../ForTruckDrivers/homepage/EvCharging'

const Homepage = () => {
  return (
    <div>
      <Header />   
      <HeroAboutUs/> 
      <EvCharging/>
    </div>
  );
};
export default Homepage;
