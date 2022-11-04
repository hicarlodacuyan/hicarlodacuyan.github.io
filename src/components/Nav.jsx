const Nav = () => {
  return (
    <nav className="bg-slate-500 text-white md:p-8 p-4">
      <div className="flex justify-between items-center md:max-w-6xl mx-auto">
        <div className="md:text-4xl text-3xl font-black drop-shadow">CD</div>
        <ul className="flex items-center md:gap-8 gap-4 uppercase italic text-sm font-bold">
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>

          <li className="text-slate-500 font-bold p-2 bg-white rounded drop-shadow hover:cursor-pointer hover:scale-110 transition ease-in-out delay-150 duration-300">
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
