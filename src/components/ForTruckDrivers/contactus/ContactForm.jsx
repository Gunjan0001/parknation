import React from "react";
import calendar from "../../../assests/images/webp/calendar.webp";
import {Formlocation, Formphone} from "../../common/Icon"
import {Formmessage} from "../../common/Icon"
export {Formphone} from "../../common/Icon"

const ContactForm = () => {
  return (
    <>
      <section>
        <div className="container lg:my-20 md:my-14 my-10 lg:pb-20">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-12">
              <form>
                <label htmlFor="name" className="lg:text-base text-sm font-normal text-black">Name</label> <br />
                <input type="text" placeholder="Enter Your Name*" className="border border-[rgba(0, 0, 0, 0.20)] py-[13px] pl-[11px] border-r-[5px] !bg-transparent w-full mt-[10px] lg:mb-7 mb-4" /><br/>
                <label htmlFor="number" className="lg:text-base text-sm font-normal text-black">Phone Number</label><br/>
                <input type="number" placeholder="Enter Your Phone Number" className="border border-[rgba(0, 0, 0, 0.20)] py-[13px] pl-[11px] border-r-[5px] !bg-transparent w-full mt-[10px] lg:mb-7 mb-4"/><br/>
                <label htmlFor="Email" className="lg:text-base text-sm font-normal text-black">Email</label><br/>
                <input type="email" placeholder="Enter Your Email*"  className="border border-[rgba(0, 0, 0, 0.20)] py-[13px] pl-[11px] border-r-[5px] !bg-transparent w-full mt-[10px] lg:mb-7 mb-4"/><br/>
                <label htmlFor="subject" className="lg:text-base text-sm font-normal text-black">Subject</label><br/>
                <input type="Subject" placeholder="Enter Subject*"  className="border border-[rgba(0, 0, 0, 0.20)] py-[13px] pl-[11px] border-r-[5px] !bg-transparent w-full mt-[10px] lg:mb-7 mb-4"/><br/>
                <label htmlFor="message" className="lg:text-base text-sm font-normal text-black">Message</label><br/>
                <textarea name="" id="" cols="10" rows="5" placeholder="Message*"  className="border border-[rgba(0, 0, 0, 0.20)] py-[11px] pl-[13px] border-r-[5px] !bg-transparent w-full mt-[10px] lg:mb-7 mb-4"></textarea>
              </form>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={calendar} alt="calendar" className="w-full lg:mb-8 mb-4 hover:scale-[1.01] duration-200 ease-linear" />
              <div className="lg:mb-4 mb-3 flex items-center">
                <a href=""><Formlocation/></a>
                <p className="lg:text-base text-sm font-normal text-[#020202] lg:ml-[12px] ml-[7px] opacity-60">350 Berlin Cross Keys Rd, Sicklerville, NJ 08081</p>
              </div>
              <div className="lg:mb-4 mb-3 flex items-center">
                <a href=""><Formmessage/></a>
                <p className="lg:text-base text-sm font-normal text-[#020202] lg:ml-[12px] ml-[7px] opacity-60"><a href="">info@parknation.org</a></p>
              </div>
              <div className="flex items-center">
                <a href=""><Formphone/></a>
                <p className="lg:text-base text-sm font-normal text-[#020202] lg:ml-[12px] ml-[7px] opacity-60">(856) 210-2133</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
