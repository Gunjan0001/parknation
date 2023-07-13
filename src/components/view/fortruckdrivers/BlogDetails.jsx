import React from "react";
import Management from "../../ForTruckDrivers/blog-detail/Management";
import Footer from "../../common/Footer";
import Contact from "../../common/Contact";
import BlogPost from "../../ForTruckDrivers/blog-detail/BlogPost";
import Header from "../../common/Header";

const BlogDetails = () => {
  return (
    <div>
      <Header />
      <Management />
      <BlogPost />
      <Contact />
      <Footer />
    </div>
  );
};

export default BlogDetails;
