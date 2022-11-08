import Project from "./Project";

const Projects = () => {
  return (
    <main className="px-2 sm:px-4 py-2.5">
      <div className="container mx-auto main-bg rounded-xl">
        <div className="md:p-8 2xl:px-24 p-4">
          <h1 className="text-lg text-white font-bold text-center uppercase md:mb-8 mb-4">
            My Projects
          </h1>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-4">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <h2 className="font-squada md:text-xl text-base text-gray-700 text-center md:mt-12 mt-8 underline underline-offset-8 decoration-orange-700 decoration-4">
            View all projects
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Projects;
