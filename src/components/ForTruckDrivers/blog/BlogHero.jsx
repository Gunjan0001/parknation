import React from 'react'
import man_with_truck from "../../../assests/images/png/blog_manWithTruck.png"

const BlogHero = () => {
  return (
    <>
      <section className='pt-20'>
        <div className="container">
          <h2 className=" text-black font-bold lg:text-3xl md:text-xl sm:text-md text-base mb-4">
            Excel spreadsheets make it difficult to scale, collaborate, and
            organize documents, as there is no document management
          </h2>
          <p className=" text-black font-normal text-base opacity-60 mb-8">
            Published on March 24/2023
          </p>
          <div className="lg:flex items-start lg:gap-14 md:gap-8">
            <div className=" lg:w-1/2 w-full">
              <img
                src={man_with_truck}
                alt="man_with_truck"
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
              <h4 className=" text-black text-md font-bold">
                TLDR - Here's what you need to know:
              </h4>
              <ul className="list-disc">
                <li className=" mt-4 md:text-base text-sm font-normal opacity-60 text-black">
                  Excel spreadsheets make it difficult to scale, collaborate,
                  and organize documents, as there is no document management
                </li>
                <li className=" mt-4 md:text-base text-sm font-normal opacity-60 text-black">
                  On-premise TMS systems require physical servers located at
                  your office, which are often costly both to purchase and
                  maintain. You also need to worry about security & privacy
                </li>
                <li className=" mt-4 md:text-base text-sm font-normal opacity-60 text-black">
                  The Rose Rocket TMS is cloud-based, secure & private, helps
                  streamline collaboration, and future-proof your business.
                  Learn more about cloud-based TMS software.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogHero