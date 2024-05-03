import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const Links = [
    { name: "VIDEO", link: "/video" },
    { name: "AUDIO", link: "/audio" },
    { name: "3DMODEL", link: "/model" },
  ];
  return (
    <>
      <div className="flex shadow-md bg-gray-400 text-black rounded-l-full">
        <div className="mr-72"> 
          <ul className="left-side flex py-5 px-6 text-sm ">
            {Links.map((e) => (
              <li className="px-4" key={e.name}>
                <NavLink to={e.link}> {e.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-side flex px-4 gap-6 ml-8">
          <FaRegSquare size ={30} className="mt-5 text-size-2xl"/>
          <FaRegSquare size ={30} className="mt-5 text-size-2xl"/>
        </div>
      </div>
    </>
  );
};

export default Nav;
