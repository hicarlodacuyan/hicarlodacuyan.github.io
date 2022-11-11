import { useRef } from "react";

const Nav = () => {
  const mobileNavRef = useRef();
  const showMobileNav = () => mobileNavRef.current.classList.toggle("hidden");

  return (
    <nav className="border-gray-200 border-b-2 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <h1 className="self-center text-3xl text-orange-700 font-black whitespace-nowrap">
          cd.
        </h1>
        <div className="flex md:order-2">
          <a
            href="https://drive.google.com/file/d/1C3Y9MOs-hkiYxzLI4FBkv7TGjpzLJB9E/view?usp=sharing"
            target="_blank"
          >
            <button
              type="button"
              className="text-white font-bold uppercase bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transition ease-in-out delay-150 hover:scale-110 duration-200"
            >
              Resume
            </button>
          </a>
          <button
            onClick={showMobileNav}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          ref={mobileNavRef}
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold md:border-0">
            <li className="navlink">
              <a
                href="#hero"
                className="block py-2 pr-4 pl-3 uppercase font-bold text-gray-700 rounded md:p-0"
              >
                About
              </a>
            </li>
            <li className="navlink">
              <a
                href="#projects"
                className="block py-2 pr-4 pl-3 uppercase font-bold text-gray-700 rounded md:p-0"
              >
                Projects
              </a>
            </li>
            <li className="navlink">
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 uppercase font-bold text-gray-700 rounded md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
