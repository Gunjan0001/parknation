import React, { useEffect, useState } from "react";
import { BlogCardData } from "../../common/Helper";

const BlogCards = () => {
  const pathName = window.location.pathname;
  const [val, setVal] = useState(6);
  console.log(pathName);
  useEffect(() => {
    if (pathName === "/blog-detail") {
      setVal(3);
    }
  }, [val]);
  return (
    <>
      <section className="container my-10">
        <div className="flex flex-wrap">
          {BlogCardData &&
            BlogCardData.slice(0, val).map((obj, index) => {
              return (
                <div key={index} className="sm:w-1/2 lg:w-1/3 px-4 mt-5">
                  <div className="bg-[#F2F3F4] rounded-[10px] hover:shadow-allsitecard transition-all">
                    <img
                      src={obj.BlogImg}
                      alt="Bloglaptop"
                      className="w-full"
                    />
                    <div className=" py-4 px-5">
                      <p className=" text-black font-normal text-base opacity-70 mb-1">
                        {obj.date}
                      </p>
                      <h3 className="text-black font-normal text-md sm:mb-3 mb-2">
                        {obj.BlogHead}
                      </h3>
                      <p className="text-black font-normal text-base opacity-70 sm:mb-4 mb-3">
                        {obj.BlogPara}
                      </p>
                      <p className="text-primary font-normal text-base">
                        {obj.ReadMore}{" "}
                      </p>
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
