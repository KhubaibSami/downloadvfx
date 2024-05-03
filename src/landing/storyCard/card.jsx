import React from "react";
import motion from "../../assets/motion.png";
import Abstract from "../../assets/abstract.png";
import fluid from "../../assets/fluid.png";
import footage from "../../assets/footage.png";
import green from "../../assets/green.png";
import background from "../../assets/background.png";

const Card = () => {
  return (
    <div className="w-3/4 ml-32 flex gap-4">
      <div className="w-48 h-48 bg-slate-500 rounded-3xl"></div>
      <div className="w-48 h-48 bg-slate-500 rounded-3xl"></div>
      <div className="w-48 h-48 bg-slate-500 rounded-3xl"></div>
      <div className="w-48 h-48 bg-slate-500 rounded-3xl"></div>

      {/* <img src={motion} alt="gg" className="w-52 h-48" />
      <img src={Abstract} alt="gg" className="w-52" />
      <img src={fluid} alt="gg" className="w-52" />
      <img src={footage} alt="gg" className="w-52" /> */}

    </div>
  );
};

export default Card;
