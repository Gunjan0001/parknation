import React from 'react'
import map from "../../../assests/images/png/allSiteMap.png"

const AllSiteMap = () => {
  return (
    <>
      <div data-aos="zoom-out" className="container py-20">
        <img src={map} alt="map" className="w-full max-h-[498px]" />
      </div>
    </>
  );
}

export default AllSiteMap