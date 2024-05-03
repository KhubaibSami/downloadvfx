import React from "react";
import Cards from "./cards"

const Library = () => {
  return (
    <>
      <div className="mt-48 relative bg-gray-300 w-full h-screen text-black">
          <h2 className="py-6 font-bold text-3xl flex justify-center"> Browse latest Assets Library </h2>
          <div>
            <Cards />
          </div>
      </div>
    </>
  );
};

export default Library;
