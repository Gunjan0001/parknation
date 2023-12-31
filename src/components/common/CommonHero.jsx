import React from "react";
const CommonHero = ({ commonHero }) => {
  return (
    <>
      <section
        className={`${commonHero.herobg} bg-no-repeat bg-cover min-h-[250px] flex items-center `}
      >
        <div className="container">
          <div>
            <h2 className="text-[32px] md:text-xl lg:text-5xl  text-white text-center font-extrabold">
              {commonHero.h2}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonHero;
