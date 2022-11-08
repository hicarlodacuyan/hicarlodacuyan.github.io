import React from "react";
import PlaceholderImg from "../assets/hero-image.png";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Project = () => {
  return (
    <article className="rounded-lg overflow-hidden bg-white drop-shadow">
      <div className="bg-gray-100 p-8">
        <img className="bg-red-300" src={PlaceholderImg} />
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h4 className="font-squada text-2xl text-gray-700">Shopping Cart</h4>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <ul className="flex flex-wrap md:text-base sm:text-sm text-xs lg:gap-4 gap-2 uppercase font-semibold">
            <li className="text-cyan-500">React</li>
            <li className="text-blue-500">React-Router</li>
            <li className="text-blue-700">API</li>
          </ul>
          <div className="flex lg:gap-4 gap-2 text-gray-700">
            <a href="#">
              <VscLinkExternal size={20} />
            </a>
            <a href="#">
              <VscGithub size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-700 md:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </article>
  );
};

export default Project;
