import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="border-gray-200 border-t-2 px-2 sm:px-4 py-2.5 mt-8">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="self-center text-3xl text-orange-700 font-black whitespace-nowrap">
          cd.
        </h1>
        <div>
          <ul className="flex gap-4">
            <li className="text-blue-600">
              <a href="#">
                <FaLinkedin size={32} />
              </a>
            </li>
            <li className="text-pink-700">
              <a href="#">
                <FaInstagram size={32} />
              </a>
            </li>
            <li className="text-blue-700">
              <a href="#">
                <FaFacebook size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
