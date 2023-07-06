import React from 'react'
import PackNationLogo from "../../../src/assests/images/webp/parknationlogo.webp";
import {Facebook} from "../../components/common/Icon"

const Footer = () => {
  return (
    <footer className="bg-[#26324D]">
         <div className='container'>
         <div className="flex flex-wrap justify-between">
            <div className="1/4">
              <img
                src={PackNationLogo}
                alt="menwithtruck"
                className="w-[104px] h-[104] mb-[22px]"
              />
              <p className="text-base font-normal text-white opacity-[0.6000000238418579] max-w-[198px] mb-[12px]">
                350 Berlin cross keys Rd, Sicklerville, NJ 08081, USA
              </p>
              <a href=""><Facebook/></a>
            </div>
            <div className="w-2/3 flex justify-between">
              <div>
                <h4 className="text-base font-semibold text-white">
                  Quick Links
                </h4>
                <ul>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">
                    Search
                  </li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">
                    About us
                  </li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">
                    Features
                  </li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">
                    How it work
                  </li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">
                    Blogs
                  </li>
                </ul>
              </div>
              <div className="lg:mt-[34px]">
                <ul>
                  <li className="text-base font-normal text-white opacity-[0.699999988079071]">Security</li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">Contact us</li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">Facts</li>
                  <li className="mt-2.5 text-base font-normal text-white opacity-[0.699999988079071]">All sites page</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-2.5">Term & Conditions</h4>
                <p className="text-base font-normal text-white opacity-[0.6000000238418579] max-w-[226px">Tortor risus sem sagittis gravida mi nisl sem gravi.</p>
                <h4 className="text-base font-semibold text-white mt-[56px]">Download the app now</h4>
              </div>
            </div>
          </div>
         </div>
      </footer>
  )
}

export default Footer