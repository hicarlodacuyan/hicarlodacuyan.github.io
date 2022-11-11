import React from "react";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";

const Project = ({ details }) => {
  const { name, description, photoURL, techStack, repo, live } = details;

  return (
    <article className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:outline outline-1 outline-white drop-shadow-md">
      <div className="bg-project md:p-8 p-4">
        <div className="drop-shadow-xl transition ease-in-out delay-150 hover:scale-105 duration-200 cursor-pointer">
          <a href={live} target="_blank">
            <img src={photoURL} />
          </a>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4">
        <h4 className="font-squada text-2xl text-gray-700 dark:text-white">{name}</h4>
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
          <div className="flex lg:gap-4 gap-2 text-gray-700 dark:text-gray-100">
            <a
              href={live}
              target="_blank"
              className="transition ease-in-out delay-150 hover:scale-125 duration-200"
            >
              <VscLinkExternal size={20} />
            </a>
            <a
              href={repo}
              target="_blank"
              className="transition ease-in-out delay-150 hover:scale-125 duration-200"
            >
              <VscGithub size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-100 md:text-base text-sm">{description}</p>
      </div>
    </article>
  );
};

export default Project;
