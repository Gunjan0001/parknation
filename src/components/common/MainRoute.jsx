import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogCards from "../ForTruckDrivers/blog/BlogCards";

const MainRoute = () => {
  return (
    <>
      <Routes>
        {/* FOR TRUCK DRIVERS  */}
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogCards />} />
  
      </Routes>
    </>
  );
};

export default MainRoute;
