import React from "react";
import BlogHero from "../../ForTruckDrivers/blog/BlogHero";
import CommonHero from "../../common/CommonHero";
import BlogCards from "../../ForTruckDrivers/blog/BlogCards";
import Header from "../../common/Header";

const Blog = () => {
  const commonHero = {
    h2: "Blogs",
    herobg: "bg-blog",
  };
  return (
    <>
      {/* <Header /> */}
      <CommonHero commonHero={commonHero} />
      <BlogHero />
      <BlogCards />
    </>
  );
};

export default Blog;
