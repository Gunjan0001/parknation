import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../view/fortruckdrivers/Homepage";
import Blog from "../view/fortruckdrivers/Blog";
import BlogDetails from "../view/fortruckdrivers/BlogDetails";
import SecurityPage from "../view/fortruckdrivers/SecurityPage";
import AboutUs from "../view/fortruckdrivers/AboutUs";
import SearchPage from "../view/fortruckdrivers/SearchPage";
import HowItWorks from "../view/fortruckdrivers/HowItWorks";
import AllSitePage from "../view/fortruckdrivers/AllSitePage";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/security-page" element={<SecurityPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/AllSitePage" element={<AllSitePage />} />
      </Routes>
    </>
  );
};

export default MainRoute;
