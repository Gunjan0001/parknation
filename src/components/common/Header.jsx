import React from "react";
import pagelogo from "../../assests/images/webp/parknationlogo.webp";
const Header = () => {
  return (
    <nav className="bg-white">
      <div className="container">
        <div className="flex justify-between">
          <img
            className=" max-w-[76px] w-full  cursor-pointer"
            src={pagelogo}
            alt="pagelogo"
          />
          <ul>
            <li>welfn</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
