import React from "react";
import orange from "../../assets/orange.png";
import Text from "./text";

const About = () => {
  return (
    <div className="relative">
      <img src={orange} alt="card" className="absolute inset-0 -z-10 bg-cover bg-center object-cover mt-16" />
      <Text />
    </div>
  );
};

export default About;
