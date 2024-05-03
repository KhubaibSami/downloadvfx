import React from "react";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div>
        <div className="flex">
          <FaStar className="mt-2 text-4xl" />
          <div className="leading-3 px-2">
            <h2 className="font-bold text-xl flex">Videos </h2>
            <p className="text-xs">Stock Footage and textures for VFX </p>
          </div>
        </div>
        <div className="flex">
          <FaStar className="mt-2 text-4xl" />
          <div className="leading-3 px-2">
            <h2 className="font-bold text-xl flex">Audio </h2>
            <p className="text-xs">Stock Footage and textures for VFX </p>
          </div>
        </div>
        <div className="flex">
          <FaStar className="mt-2 text-4xl" />
          <div className="leading-3 px-2">
            <h2 className="font-bold text-xl flex">3D Models </h2>
            <p className="text-xs">Stock Footage and textures for VFX </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Cards;
