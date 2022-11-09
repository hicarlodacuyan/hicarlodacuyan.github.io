import Project from "./Project";
import projects from "../utils/ProjectDetails";

const Projects = () => {
  return (
    <main id="projects" className="px-2 sm:px-4 py-2.5">
      <div className="container mx-auto main-bg rounded-xl">
        <div className="flex flex-col justify-center items-center md:p-8 2xl:px-24 p-4">
          <h1 className="text-lg text-white font-bold uppercase md:mb-8 mb-4">
            My Projects
          </h1>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-4">
            {projects.map((project) => (
              <Project key={project.id} details={project} />
            ))}
          </div>
          <h2 className="font-squada md:text-xl text-base text-gray-700 md:mt-12 mt-8 more-projects">
            <a href="https://github.com/hicarlodacuyan" target="_blank">
              View all projects
            </a>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Projects;
