import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../view/fortruckdrivers/Homepage";
import Blog from "../view/fortruckdrivers/Blog";
import BlogDetails from "../view/fortruckdrivers/BlogDetails";
import SecurityPage from "../view/fortruckdrivers/SecurityPage";
import AboutUs from "../view/fortruckdrivers/AboutUs";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/security-page" element={<SecurityPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default MainRoute;
