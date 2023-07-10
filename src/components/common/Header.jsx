import React, { useState } from "react";
import pagelogo from "../../assests/images/webp/parknationlogo.webp";
import { CrossIcon } from "./Icon";
const Header = () => {
  const [nav, setNav] = useState(true);
  return (
    <nav className="bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <img
            className="my-[12px] max-w-[76px] w-full  cursor-pointer"
            src={pagelogo}
            alt="pagelogo"
          />
          <div
            className={`flex items-center duration-300 lg:flex-row flex-col absolute lg:relative bg-gray-50 lg:bg-white h-full w-full  justify-center lg:justify-end 
             ${
               nav === true
                 ? "left-[100%] bottom-[100%] lg:bottom-0 lg:left-0"
                 : "bottom-0 left-0"
             }`}
          >
            <ul className="flex itmes-center xl:gap-[28px] lg:gap-[20px] gap-[30px] lg:flex-row flex-col text-center lg:text-start">
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                Home
              </li>
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                Search
              </li>
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                How it work
              </li>
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                Security
              </li>
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                Contact us
              </li>
              <li className=" text-base font-normal text-black hover:text-primary cursor-pointer transition-all">
                All sites
              </li>
              <div className="dropdown inline-block relative">
                <button className="text-base font-normal text-black hover:text-primary cursor-pointer transition-all inline-flex items-center">
                  <span className="mr-1">More</span>
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="dropdown-menu absolute top-[-5000%] text-gray-700 w-[100px] pt-1 duration-500 bg-white pb-3 ">
                  <li className="">
                    <a
                      className="rounded-t text-base font-normal text-black hover:text-primary cursor-pointer  py-1 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Bogs
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=" py-1 px-4 text-base font-normal text-black hover:text-primary cursor-pointer block whitespace-no-wrap"
                      href="#"
                    >
                      Facts
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b  text-base font-normal text-black hover:text-primary cursor-pointer py-1 px-4 block  !whitespace-no-wrap"
                      href="#"
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </div>
              <span
                onClick={() => setNav(true)}
                className=" absolute lg:hidden top-[25px] right-[30px]"
              >
                <CrossIcon />
              </span>
            </ul>
            <div className="flex xl:ps-[60px] lg:ms-[20px] mt-7 lg:mt-0">
              <button className=" text-base text-primary font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] hover:text-white hover:bg-primary duration-300 ">
                Register
              </button>
              <button className=" text-base hover:text-primary ms-[10px] hover:bg-white font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300 ">
                Log in
              </button>
            </div>
          </div>
          <div>
            <div
              className=" lg:hidden flex flex-col w-[30px] h-[30px] gap-[6px] "
              onClick={() => setNav(false)}
            >
              <span className="w-full h-[3px] bg-black"></span>
              <span className="w-full h-[3px] bg-black"></span>
              <span className="w-full h-[3px] bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
