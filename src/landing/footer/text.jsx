import React from "react";
import Last from "./last";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Text = () => {
  return (
    <>
    
      <div className="flex gap-20 ml-32 mt-10">
        <div>
          <h1 className="font-extrabold text-xl ">Follow Us</h1>
          <div className="flex gap-4 my-3">
          <FaFacebook className="text-3xl"/>
          <FaInstagram className="text-3xl"/>
          <FaYoutube className="text-3xl" />
          <FaTwitter className="text-3xl"/>
          <FaPinterest className="text-3xl"/>
          </div>
          <p className="text-sm">Download VFX is completely free for all users.</p>
        </div>
        <div>
          <h2  className="font-extrabold text-xl -ml-3">3d Models</h2>
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2  className="font-extrabold text-xl -ml-3">Videoes</h2>
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2  className="font-extrabold text-xl -ml-3">Music</h2>
          <ul>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="flex ml-32 gap-48 my-3">
        <h2>UseFull Links</h2>
        <ul className="flex gap-4">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
      </div>
      <Last />
    </>
  );
};

export default Text;
