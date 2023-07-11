import React from "react";
import AllSiteMap from "../../ForTruckDrivers/allSitePages/AllSiteMap";
import Header from "../../common/Header";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";
import Location from "../../common/Location";

const AllSitePage = () => {
  return (
    <>
      <Header />
      <Location />
      <AllSiteMap />
      <Contact />
      <Footer />
    </>
  );
};

export default AllSitePage;
