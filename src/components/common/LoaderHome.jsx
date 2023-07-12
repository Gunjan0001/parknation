import React, { useEffect, useState } from "react";
import PreloderBar from "./PreloaderBar";
import logo from "../../assests/images/webp/footerlogo.webp";

function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 6000);
  }, []);

  if (loder === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-primary top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div class="flex justify-center items-center flex-col text-center">
            <img
              className="max-w-[180px] min-h-[100px] w-1/2"
              src={logo}
              alt="logo"
            />
            <PreloderBar />
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;
