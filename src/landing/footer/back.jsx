import React from "react";
import last from "../../assets/last.png";
import Text from "./text";

const Footer = () => {
  return (
    <>
      <img
        src={last}
        alt="footer"
        className=" inset-0 -z-10 bg-cover bg-center object-cover"
      />
      <Text />
    </>
  );
};

export default Footer;
