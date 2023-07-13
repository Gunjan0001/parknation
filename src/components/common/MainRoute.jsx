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
import FactPage from "../view/fortruckdrivers/FactPage";
import GetInTouch from "../view/fortruckdrivers/GetInTouch";
import LogIn from "../view/LogIn";
import GetStarted from "../view/GetStarted";
import AcoountSignUp from "../view/AcoountSignUp";
import SignIn from "../view/SignIn";
import Signup from "../view/Signup";
import Code from "../view/Code";
import Authenticator from "../view/Authenticator";

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
        <Route path="/howItWorks" element={<HowItWorks />} />
        <Route path="/allSitePage" element={<AllSitePage />} />
        <Route path="/factPage" element={<FactPage />} />
        <Route path="/contact-us" element={<GetInTouch />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/account-signUp" element={<AcoountSignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/Sigup" element={<Signup />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/authenticator" element={<Authenticator />} />
      </Routes>
    </>
  );
};

export default MainRoute;
