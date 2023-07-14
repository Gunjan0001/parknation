import React from 'react'
import footerlogo from "../../../src/assests/images/webp/footerlogo.webp";
import {Facebook} from "../../components/common/Icon"
import {Twitter} from "../../components/common/Icon"
import {Instagram} from "../../components/common/Icon"
import PlayStore from "../../../src/assests/images/png/PlayStore.png"
import AppStore from "../../../src/assests/images/png/AppStore.png"

const Footer = () => {
  return (
    <footer className="bg-[#26324D] lg:pt-24 pt-16">
      <div className="container mt-20">
        <div className="flex flex-wrap justify-between pb-[18px] border-[#505A70] border-b-[2px]">
          <div className="lg:w-1/4 w-full">
            <img
              src={footerlogo}
              alt="menwithtruck"
              className="w-[104px] h-[104] mb-[22px]"
            />
            <p className="text-base font-normal text-white opacity-[0.6000000238418579] max-w-[198px] mb-[12px]">
              350 Berlin cross keys Rd, Sicklerville, NJ 08081, USA
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
              <a href="https://twitter.com/">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="lg:w-2/3 w-full sm:flex justify-between lg:mt-0 mt-5">
            <div className="w-1/3">
              <h4 className="text-base font-semibold text-white">
                Quick Links
              </h4>
              <ul>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#"> Search</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">About us</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">Features</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">How it work</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="mt-[34px] w-1/2">
              <ul>
                <li className="text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">Security</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">Contact us</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">Facts</a>
                </li>
                <li className="mt-2.5 text-base font-normal text-white hover:opacity-100 opacity-[0.699999988079071]">
                  <a href="#">All sites page</a>
                </li>
              </ul>
            </div>
            <div className="lg:mt-0 md:mt-0 sm:mt-0 mt-5">
              <h4 className="text-base font-semibold text-white mb-2.5">
                Term & Conditions
              </h4>
              <p className="text-base font-normal text-white opacity-[0.6000000238418579] max-w-[200px]">
                Tortor risus sem sagittis gravida mi nisl sem gravi.
              </p>
              <h4 className="text-base font-semibold text-white mt-[56px] mb-2.5">
                Download the app now
              </h4>
              <div className="flex gap-[12px]">
                <a href="https://play.google.com/store/games">
                  <img src={PlayStore} alt="" className="w-[107px] h-[32px]" />
                </a>
                <a href="https://www.apple.com/in/app-store/">
                  <img src={AppStore} alt="" className="w-[107px] h-[32px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs font-normal text-white text-center opacity-[0.6000000238418579] py-[14px]">
          Copyright@2023
        </p>
      </div>
    </footer>
  );
}

export default Footer