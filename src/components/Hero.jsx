import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section id="hero" className="flex px-2 sm:px-4 py-2.5">
      <div className="container mx-auto flex">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-squada text-5xl xl:text-8xl 2xl:text-9xl text-cyan-700 uppercase mt-4 md:mt-0">
            Carlo Dacuyan
          </h2>
          <h3 className="text-2xl xl:text-5xl 2xl:text-6xl text-gray-700 font-bold">
            Front-End Web Developer
          </h3>
          <p className="py-4 text-gray-700">
            An aspiring web developer who is passionate about building beautiful
            and user-friendly websites. With a strong foundation in HTML, CSS
            and JavaScript, he is always looking to improve his skills and learn
            new technologies.
          </p>
          <button
            type="button"
            className="text-white font-bold uppercase bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center self-start"
          >
            Projects
          </button>
        </div>
        <div className="flex-1 hidden md:block">
          <img className="" src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
