import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Model = () => {
  return (
    <>
      <div className="text-teal-600 text-2xl font-bold flex justify-center">
        Model
      </div>
      <Link to="/" className="text-teal-600 text-2xl font-bold flex justify-center"> <FaArrowLeft className="mt-2"/>  home </Link>
     
    </>
  );
};

export default Model;
