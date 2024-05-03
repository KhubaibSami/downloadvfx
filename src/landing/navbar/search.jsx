import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className=" flex mt-44 items-center relative">
        <h1 className="text-white text-3xl font-bold ml-32">
          Everything you need to <br /> get creative <span className="text-orange-300">projects done</span>
        </h1>
        <div className="relative ml-10">
          <input type="text" placeholder="Search" className="px-32 py-2 rounded-full border border-gray-300" />
          <select className="absolute top-1/2 right-80 -translate-y-1/2 rounded-full border border-gray-300 py-1 px-3 cursor-pointer">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <IoSearch className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-gray-500" />
        </div>
      </div>
    </>
  );
};
export default Search;
