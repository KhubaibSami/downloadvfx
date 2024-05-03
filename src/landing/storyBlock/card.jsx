import React from "react";
import motion from "../../assets/motion.png";
import Abstract from "../../assets/abstract.png";
import fluid from "../../assets/fluid.png";
import footage from "../../assets/footage.png";
import green from "../../assets/green.png";
import background from "../../assets/background.png";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-3/4 ml-32">
      <img src={motion} alt="gg" className="w-full h-auto" />
      <img src={Abstract} alt="gg" className="w-full h-auto" />
      <img src={fluid} alt="gg" className="w-full h-auto" />
      <img src={footage} alt="gg" className="w-full h-auto" />
      <img src={green} alt="gg" className="w-full h-auto" />
      <img src={background} alt="gg" className="w-full h-auto" />
    </div>
  );
};

export default Card;
