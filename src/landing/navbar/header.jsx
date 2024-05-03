import React from "react";
import Navbar from "./Navbar";
import slider from "../../assets/slider.png";
import Search from "./search";

const Header = () => {
  return (
    <>
      <div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slider})` }}
        />
        <Navbar />
        <Search />

        
      </div>
    </>
  );
};

export default Header;
