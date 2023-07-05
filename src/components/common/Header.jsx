import React from "react";
import pagelogo from "../../assests/images/webp/parknationlogo.webp";
const Header = () => {
  return (
    <nav className="bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <img
            className="my-[12px] max-w-[76px] w-full  cursor-pointer"
            src={pagelogo}
            alt="pagelogo"
          />
          <ul className="flex itmes-center gap-[28px]">
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
            <div class="dropdown inline-block relative">
              <button class="text-base font-normal text-black hover:text-primary cursor-pointer transition-all inline-flex items-center">
                <span class="mr-1">More</span>
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul class="dropdown-menu absolute top-[-5000%] text-gray-700 w-[100px] pt-1 duration-500 bg-white pb-3 ">
                <li class="">
                  <a
                    class="rounded-t text-base font-normal text-black hover:text-primary cursor-pointer  py-1 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Bogs
                  </a>
                </li>
                <li class="">
                  <a
                    class=" py-1 px-4 text-base font-normal text-black hover:text-primary cursor-pointer block whitespace-no-wrap"
                    href="#"
                  >
                    Facts
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b  text-base font-normal text-black hover:text-primary cursor-pointer py-1 px-4 block  !whitespace-no-wrap"
                    href="#"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
