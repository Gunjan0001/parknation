import React, { useState, useEffect } from "react";

function PreloderBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 500;
    const frameRate = 160;
    const totalFrames = animationDuration / (1000 / frameRate);
    const increment = 100 / totalFrames;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      if (currentCount >= 100) {
        clearInterval(intervalId);
      } else {
        currentCount += increment;
        const newValue = Math.min(Math.round(currentCount), 100);
        setCount(newValue);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-5">
      <h1 className=" text-white w-[200px] h-full text-xl text-center">{count}%</h1>
      <div
        className="lg:w-[600px] md:w[300px] w-full mt-3 rounded-full overflow-hidden"
        style={{ height: "30px", background: "#000" }}
      >
        <div
          className="rounded-full"
          style={{
            width: `${count}%`,
            height: "100%",
            background: "#fff",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default PreloderBar;
