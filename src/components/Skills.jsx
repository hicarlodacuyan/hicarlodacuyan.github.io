const Skills = () => {
  return (
    <section id="skills" className="flex px-2 sm:px-4 py-2.5">
      <div className="container mx-auto rounded-xl py-12">
        <ul className="grid xl:grid-cols-3 md:grid-cols-2 place-items-center md:gap-20 gap-4 font-bold text-gray-700">            
            <li className="flex flex-col items-center">
                <h4 className="text-orange-600 md:text-6xl text-5xl">HTML</h4>
                <p className="md:text-2xl text-lg dark:text-white">4 Years Experience</p>
            </li>
            <li className="flex flex-col items-center">
                <h4 className="text-blue-600 md:text-6xl text-5xl">CSS</h4>
                <p className="md:text-2xl text-lg dark:text-white">4 Years Experience</p>
            </li>
            <li className="flex flex-col items-center">
                <h4 className="text-yellow-400 md:text-6xl text-5xl">JavaScript</h4>
                <p className="md:text-2xl text-lg dark:text-white">4 Years Experience</p>
            </li>
            <li className="flex flex-col items-center">
                <h4 className="text-cyan-500 md:text-6xl text-5xl">React</h4>
                <p className="md:text-2xl text-lg dark:text-white">1 Year Experience</p>
            </li>
            <li className="flex flex-col items-center">
                <h4 className="text-teal-500 md:text-6xl text-5xl">Tailwind</h4>
                <p className="md:text-2xl text-lg dark:text-white">1 Year Experience</p>
            </li>
            <li className="flex flex-col items-center">
                <h4 className="text-amber-500 md:text-6xl text-5xl">Firebase</h4>
                <p className="md:text-2xl text-lg dark:text-white">1 Year Experience</p>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;