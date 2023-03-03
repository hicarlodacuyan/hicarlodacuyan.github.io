const Skills = () => {
  return (
    <section id="skills" className="flex px-2 sm:px-4 pt-2.5 pb-16">
      <div className="container mx-auto rounded-xl py-12">
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 place-items-center md:gap-20 gap-4 font-bold text-gray-700">
          <li className="flex flex-col items-center gap-2">
            <h4 className="text-teal-500 text-5xl xl:text-6xl 2xl:text-7xl">
              TypeScript
            </h4>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h4 className="text-cyan-500 text-5xl xl:text-6xl 2xl:text-7xl">
              React
            </h4>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h4 className="text-purple-500 text-5xl xl:text-6xl 2xl:text-7xl">
              Redux
            </h4>
          </li>

          <li className="flex flex-col items-center gap-2">
            <h4 className="text-green-700 text-5xl xl:text-6xl 2xl:text-7xl">
              NodeJS
            </h4>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h4 className="text-gray-500 dark:text-gray-300 text-5xl xl:text-6xl 2xl:text-7xl">
              Express
            </h4>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h4 className="text-green-500 text-5xl xl:text-6xl 2xl:text-7xl">
              MongoDB
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
