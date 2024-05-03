import React from "react";
import logo from "../../assets/logo.png";
import Nav from "./nav";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-2xl flex ">
        <div className=" z-10 flex mt-4 gap-20">
          <img src={logo} alt="logo" width="200vw" className="ml-32 cursor-pointer" />
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
