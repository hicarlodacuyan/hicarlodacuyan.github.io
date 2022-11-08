import React from "react";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Project = ({ details }) => {
  const { name, description, photoURL, techStack, repo, live } = details;

  return (
    <article className="rounded-lg overflow-hidden bg-white drop-shadow">
      <div className="bg-gray-100 p-8">
        <img className="bg-red-300 drop-shadow-lg" src={photoURL} />
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h4 className="font-squada text-2xl text-gray-700">{name}</h4>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <ul className="flex flex-wrap md:text-base sm:text-sm text-xs lg:gap-4 gap-2 uppercase font-semibold">
            {techStack.map((tech, index) => (
              <li
                key={index}
                style={{
                  color: tech.color,
                }}
              >
                {tech.name}
              </li>
            ))}
          </ul>
          <div className="flex lg:gap-4 gap-2 text-gray-700">
            <a href={live} target="_blank">
              <VscLinkExternal size={20} />
            </a>
            <a href={repo} target="_blank">
              <VscGithub size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-700 md:text-base text-sm">{description}</p>
      </div>
    </article>
  );
};

export default Project;
