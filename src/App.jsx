import { Nav, Hero, Projects, Contact, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
