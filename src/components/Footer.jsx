import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="border-gray-200 dark:border-gray-700 border-t-2 px-2 sm:px-4 py-2.5 mt-8">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="self-center text-3xl text-orange-700 font-black whitespace-nowrap">
          cd.
        </h1>
        <div>
          <ul className="flex gap-4">
            <li className="text-gray-700 dark:text-gray-300 transition ease-in-out delay-150 hover:scale-110 duration-200">
              <a href="https://github.com/hicarlodacuyan" target="_blank">
                <FaGithub size={32} />
              </a>
            </li>
            <li className="text-blue-600 transition ease-in-out delay-150 hover:scale-110 duration-200">
              <a
                href="https://www.linkedin.com/in/hicarlodacuyan/"
                target="_blank"
              >
                <FaLinkedin size={32} />
              </a>
            </li>
            <li className="text-pink-700 transition ease-in-out delay-150 hover:scale-110 duration-200">
              <a
                href="https://www.instagram.com/hi.carlodacuyan/"
                target="_blank"
              >
                <FaInstagram size={32} />
              </a>
            </li>
            <li className="text-blue-700 transition ease-in-out delay-150 hover:scale-110 duration-200">
              <a
                href="https://www.facebook.com/hi.carlodacuyan"
                target="_blank"
              >
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
