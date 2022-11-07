import { Nav, Hero, Projects, Contact } from "./components";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
