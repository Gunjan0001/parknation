import React from 'react'
import pagelogo from "../../assests/images/webp/parknationlogo.webp";

const SignUpNav = () => {
    function MyDropdown()
  return (
    <div className='bg-white'>
       <div className='container'>

       <img src={pagelogo} alt="pagelogo" />
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
       </div>
    </div>
  )
}

export default SignUpNav