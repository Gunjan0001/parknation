import React from "react";
import Header from "../../common/Header";
import Contact from "../../common/Contact";
import Footer from "../../common/Footer";
import CommonHero from "../../common/CommonHero";
import ContactForm from "../../ForTruckDrivers/contactus/ContactForm";

const GetInTouch = () => {
  const commonHero = {
    h2: "Get in touch",
    herobg: "bg-touch",
  };
  return (
    <>
      <Header />
      <CommonHero commonHero={commonHero} />
      <ContactForm />
      <Contact />
      <Footer />
    </>
  );
};

export default GetInTouch;
