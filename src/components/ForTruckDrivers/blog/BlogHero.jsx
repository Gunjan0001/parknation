import React from 'react'
import man_with_truck from "../../../assests/images/png/blog_manWithTruck.png"

const BlogHero = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className=" text-black font-bold text-3xl mb-4">
            Excel spreadsheets make it difficult to scale, collaborate, and
            organize documents, as there is no document management
          </h2>
          <p className=" text-black font-normal text-base opacity-60 mb-8">
            Published on March 24/2023
          </p>
          <div className="flex">
            <div className=" lg:w-1/2">
              <img src={man_with_truck} alt="man_with_truck" />
            </div>
            <div className=" lg:w-1/2">
              <h4>TLDR - Here's what you need to know:</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHero