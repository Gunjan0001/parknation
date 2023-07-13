import React from "react";
import pagelogo from "../../assests/images/png/logo.png";
const FormNav = () => {
  return (
    <nav>
      <div className="container">
        <div className="flex mt-[12px] items-center justify-between">
          <img src={pagelogo} alt="pagelogo" />
          <div class="">
            <div class="dropdown inline-block relative">
              <button class="bg-[#fff] border-[1px] border-solid border-[#999999] text-[#000000] font-normal text-base py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">English</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Hindi
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Span
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Korean
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FormNav;
