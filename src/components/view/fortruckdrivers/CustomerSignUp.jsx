import React, { useState } from "react";
import { DownSideArrow } from "../../common/Icon";
import redcar from "../../../assests/images/png/redcar.png";
import registation from "../../../assests/images/png/dotsmany.png";
import advance from "../../../assests/images/png/advance.png";
import spaces from "../../../assests/images/png/spaces.png";
import { Rightsidearrow } from "../../common/Icon";
const CustomerSignUp = () => {
  const [tab, setTab] = useState(0);
  return (
    <section>
      <div className="container lg:block hidden lg:mt-[140px] lg:mb-[80px]  mt-[50px]">
        <h2 className="text-center  font-bold text-4xl lg:mb-[60px] mb-[30px] text-black">
          Sign up as a customer
        </h2>
        <div className="flex flex-wrap">
          <div className="flex lg:flex-col flex-row lg:w-1/4">
            <div
              onClick={() => {
                setTab(0);
              }}
              className={
                tab === 0
                  ? "pb-[10px] cursor-pointer"
                  : "pb-[10px] cursor-pointer"
              }
            >
              <button
                className={
                  tab === 0
                    ? " font-semibold border-b-[1px] border-b-primary hover:border-b-primary mb-[10px] text-primary text-base  hover:text-primary duration-300 pb-[10px]"
                    : " font-semibold border-b-[1px] border-b-[#bec2ca] pb-[10px] mb-[10px]  hover:border-b-primary text-black text-base  hover:text-primary duration-300"
                }
              >
                Convenient, simple parking
              </button>
              <span>
                <DownSideArrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(1);
              }}
              className={
                tab === 1
                  ? "pb-[10px] cursor-pointer"
                  : "pb-[10px] cursor-pointer"
              }
            >
              <button
                className={
                  tab === 1
                    ? " font-semibold border-b-[1px] border-b-primary hover:border-b-primary mb-[10px] text-primary text-base  hover:text-primary duration-300 pb-[10px]"
                    : " font-semibold border-b-[1px] border-b-[#bec2ca] pb-[10px] mb-[10px]  hover:border-b-primary text-black text-base  hover:text-primary duration-300"
                }
              >
                Free registration
              </button>
              <span>
                <DownSideArrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(2);
              }}
              className={
                tab === 2
                  ? "pb-[10px] cursor-pointer"
                  : "pb-[10px] cursor-pointer"
              }
            >
              <button
                className={
                  tab === 2
                    ? " font-semibold border-b-[1px] border-b-primary hover:border-b-primary mb-[10px] text-primary text-base  hover:text-primary duration-300 pb-[10px]"
                    : " font-semibold border-b-[1px] border-b-[#bec2ca] pb-[10px] mb-[10px]  hover:border-b-primary text-black text-base  hover:text-primary duration-300"
                }
              >
                Reserve in advance
              </button>
              <span>
                <DownSideArrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(3);
              }}
              className={
                tab === 3
                  ? "pb-[10px] cursor-pointer"
                  : "pb-[10px] cursor-pointer"
              }
            >
              <button
                className={
                  tab === 3
                    ? " font-semibold border-b-[1px] border-b-primary hover:border-b-primary  text-primary text-base  hover:text-primary duration-300 pb-[10px]"
                    : " font-semibold border-b-[1px] border-b-[#bec2ca] pb-[10px]   hover:border-b-primary text-black text-base  hover:text-primary duration-300"
                }
              >
                Wide aisles and large parking spaces
              </button>
            </div>
          </div>
          <div className=" bg-[#f8f8f8] lg:w-3/4 rounded-[20px] ">
            <div>
              <div
                className={
                  tab === 0
                    ? "sm:flex mt-[50px] lg:ms-[50px] items-center"
                    : "hidden lg:ms-[50px]"
                }
              >
                <img src={redcar} alt="redcar how its wroks" />
                <div className="sm:ms-[46px]">
                  <p className="text-base font-normal text-[#000000] opacity-[.7]">
                    Lorem ipsum dolor sit amet consectetur. Dignissim sit
                    euismod dictumst id duis felis sed. Hendrerit Lorem ipsum
                    dolor sit amet consectetur. Dignissim sit euismod dictumst
                    id duis felis sed. Hendrerit
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 1
                    ? "sm:flex mt-[50px] lg:ms-[50px] items-center"
                    : "hidden lg:ms-[50px]"
                }
              >
                <img src={registation} alt="registation how its wroks" />
                <div className="sm:ms-[46px]">
                  <p className="text-base font-normal text-[#000000] opacity-[.7] md:me-[70px]">
                    Vulputate pellentesque adipiscing aliquam velit. Quis
                    rhoncus cursus donec morbi placerat tristique odio. Arcu sed
                    tellus aliquet mattis. Leo tortor integer fusce in. Gravida
                    tortor aliquet suspendisse sem nec morbi erat.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 2
                    ? "sm:flex mt-[50px] lg:ms-[50px] items-center"
                    : "hidden lg:ms-[50px]"
                }
              >
                <img src={advance} alt="advance how its wroks" />
                <div className="sm:ms-[46px]">
                  <p className="text-base font-normal text-[#000000] opacity-[.7]">
                    Mattis sed sagittis vel amet sed et dignissim. Tristique
                    adipiscing et varius quisque amet.
                  </p>
                  <p className="text-base font-normal text-[#000000] opacity-[.7]">
                    Faucibus tortor viverra sagittis et bibendum in volutpat
                    maecenas dignissim. Lacinia ultrices ac
                  </p>
                </div>
              </div>{" "}
              <div
                className={
                  tab === 3
                    ? "sm:flex mt-[50px] lg:ms-[50px] items-center"
                    : "hidden lg:ms-[50px]"
                }
              >
                <img src={spaces} alt="spaces how its wroks" />
                <div className="sm:ms-[46px]">
                  <p className="text-base font-normal text-[#000000] opacity-[.7]">
                    Adipiscing elementum amet ut in id sed libero odio elit.
                    Dictum scelerisque tempor elit cursus
                  </p>
                  <p className="text-base font-normal text-[#000000] opacity-[.7]">
                    faucibus tempus iaculis. Tellus eget eget quam fusce lorem
                    ullamcorper etiam pretium nunc.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="text-end mt-[63px] me-[50px]">
              <button className=" text-base hover:text-primary ms-[10px] hover:bg-white font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:py-[100px] lg:hidden  py-[50px] container">
        <h2 className="text-center font-bold text-4xl mb-[60px] text-black">
          How it works
        </h2>
        <div className=" bg-[#f8f8f8] py-[24px] px-[28px] rounded-[20px]">
          <div className="flex overflow-x-scroll">
            <div
              onClick={() => {
                setTab(0);
              }}
              className={
                tab === 0
                  ? "flex  border-b-[1px] border-b-primary hover:border-b-primary duration-300 pb-[10px] cursor-pointer"
                  : "flex  border-b-[1px] hover:border-b-primary duration-300  border-b-[#bec2ca]   pb-[10px] cursor-pointer"
              }
            >
              <p
                className={
                  tab === 0
                    ? " font-semibold text-primary text-base whitespace-nowrap hover:text-primary duration-300"
                    : " font-semibold text-black text-base whitespace-nowrap hover:text-primary duration-300"
                }
              >
                Convenient, simple parking
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(1);
              }}
              className={
                tab === 1
                  ? "flex ps-[33px] border-b-[1px] border-b-primary hover:border-b-primary duration-300 pb-[10px] cursor-pointer"
                  : "flex ps-[33px] border-b-[1px] border-b-[#bec2ca] pb-[10px] cursor-pointer hover:border-b-primary duration-300 "
              }
            >
              <p
                className={
                  tab === 1
                    ? " font-semibold text-primary text-base whitespace-nowrap hover:text-primary duration-300"
                    : " font-semibold text-black text-base whitespace-nowrap hover:text-primary duration-300"
                }
              >
                Free registration
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(2);
              }}
              className={
                tab === 2
                  ? "flex ps-[33px] border-b-[1px] border-b-primary hover:border-b-primary duration-300 pb-[10px] cursor-pointer"
                  : "flex ps-[33px] border-b-[1px] border-b-[#bec2ca] pb-[10px] cursor-pointer hover:border-b-primary duration-300 "
              }
            >
              <p
                className={
                  tab === 2
                    ? " font-semibold text-primary text-base whitespace-nowrap hover:text-primary duration-300"
                    : " font-semibold text-black text-base whitespace-nowrap hover:text-primary duration-300"
                }
              >
                Reserve in advance
              </p>
              <span className=" ms-[25px]">
                <Rightsidearrow />
              </span>
            </div>
            <div
              onClick={() => {
                setTab(3);
              }}
              className={
                tab === 3
                  ? "flex px-[33px] border-b-[1px] border-b-primary hover:border-b-primary duration-300 pb-[10px] cursor-pointer"
                  : "flex px-[33px] border-b-[1px] border-b-[#bec2ca] pb-[10px] cursor-pointer hover:border-b-primary duration-300 "
              }
            >
              <p
                className={
                  tab === 3
                    ? " font-semibold text-primary text-base whitespace-nowrap hover:text-primary duration-300"
                    : " font-semibold text-black text-base whitespace-nowrap hover:text-primary duration-300"
                }
              >
                Wide aisles and large parking spaces
              </p>
            </div>
          </div>
          <div>
            <div
              className={
                tab === 0
                  ? "sm:flex mt-[26px] lg:ms-[50px] items-center"
                  : "hidden lg:ms-[50px]"
              }
            >
              <img src={redcar} alt="redcar how its wroks" />
              <div className="sm:ms-[46px]">
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Lorem ipsum dolor sit amet consectetur. Dignissim sit euismod
                  dictumst id duis felis sed. Hendrerit
                </p>
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Lorem ipsum dolor sit amet consectetur. Dignissim sit euismod
                  dictumst id duis felis sed. Hendrerit
                </p>
              </div>
            </div>
            <div
              className={
                tab === 1
                  ? "sm:flex mt-[26px] lg:ms-[50px] items-center"
                  : "hidden lg:ms-[50px]"
              }
            >
              <img src={registation} alt="registation how its wroks" />
              <div className="sm:ms-[46px]">
                <p className="text-base font-normal text-[#000000] opacity-[.7] md:me-[70px]">
                  Vulputate pellentesque adipiscing aliquam velit. Quis rhoncus
                  cursus donec morbi placerat tristique odio. Arcu sed tellus
                  aliquet mattis. Leo tortor integer fusce in. Gravida tortor
                  aliquet suspendisse sem nec morbi erat.
                </p>
              </div>
            </div>
            <div
              className={
                tab === 2
                  ? "sm:flex mt-[26px] lg:ms-[50px] items-center"
                  : "hidden lg:ms-[50px]"
              }
            >
              <img src={advance} alt="advance how its wroks" />
              <div className="sm:ms-[46px]">
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Mattis sed sagittis vel amet sed et dignissim. Tristique
                  adipiscing et varius quisque amet.
                </p>
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Faucibus tortor viverra sagittis et bibendum in volutpat
                  maecenas dignissim. Lacinia ultrices ac
                </p>
              </div>
            </div>{" "}
            <div
              className={
                tab === 3
                  ? "sm:flex mt-[26px] lg:ms-[50px] items-center"
                  : "hidden lg:ms-[50px]"
              }
            >
              <img src={spaces} alt="spaces how its wroks" />
              <div className="sm:ms-[46px]">
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  Adipiscing elementum amet ut in id sed libero odio elit.
                  Dictum scelerisque tempor elit cursus
                </p>
                <p className="text-base font-normal text-[#000000] opacity-[.7]">
                  faucibus tempus iaculis. Tellus eget eget quam fusce lorem
                  ullamcorper etiam pretium nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className=" text-base hover:text-primary ms-[10px] hover:bg-white font-semibold py-[12px] px-[26px] border-[1px] border-primary rounded-[10px] text-white bg-primary duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSignUp;
