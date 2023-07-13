import React from "react";
import Location from "../../common/Location";
import Header from "../../common/Header";
import Search from "../../ForTruckDrivers/search/Search";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";

const SearchPage = () => {
  return (
    <>
      <Header />
      <Location />
      <Search />
      <Contact />
      <Footer />
    </>
  );
};

export default SearchPage;
