import React, { useEffect } from "react";

const loadScript = () => {
  const script = document.createElement("script");
  script.src = "./script.js";
  script.id = "animation";
  script.onload = () => {
    console.log("script loaded");
  };
  const elem = document.getElementById("animation");
  if (!elem) document.body.appendChild(script);
};

const Fluid: React.FC = () => {
  useEffect(() => {
    loadScript();
  });

  return (
    <>
      <div className="fixed h-[100vw] w-[100vw]">
        <canvas className="h-[100vh]"></canvas>
      </div>
    </>
  );
};

export default Fluid;
