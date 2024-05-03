import React from "react";
import backgroundCard from "../../assets/backgroundCard.png";
import Text from "./text";

const StoryBlock = () => {
  return (
    <div className="relative">
      <img src={backgroundCard} alt="card" className="absolute inset-0 -z-10 bg-cover bg-center object-cover" />
      <Text />
    </div>
  );
};

export default StoryBlock;
