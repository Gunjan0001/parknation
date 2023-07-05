import React from "react";
import BlogHero from "../../ForTruckDrivers/blog/BlogHero";
import CommonHero from "../../common/CommonHero";

const Blog = () => {
  const commonHero = {
    heading: "Blogs",
    // herobg: "bg-blog",
  };
  return (
    <>
      <CommonHero commonHero={commonHero} />
      <BlogHero />
    </>
  );
};

export default Blog;
