import React from "react";
import { BlogCardData } from "../../common/Helper";

const BlogCards = () => {
  return (
    <>
      <section className="container mt-10">
        <div className="flex flex-wrap">
          {BlogCardData &&
            BlogCardData.map((obj, index) => {
              return (
                <div key={index} className=" w-1/3 px-4 mt-5">
                  <div className="bg-[#F2F3F4]">
                    <img
                      src={obj.BlogImg}
                      alt="Bloglaptop"
                      className="w-full"
                    />
                    <div className=" py-4 px-5">
                      <p>{obj.date} </p>
                      <h3>{obj.BlogHead} </h3>
                      <p>{obj.BlogPara} </p>
                      <p>{obj.ReadMore} </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default BlogCards;
