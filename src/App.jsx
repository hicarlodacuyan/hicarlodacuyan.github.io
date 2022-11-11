import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Nav, Hero, Projects, Contact, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState("light");
 
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme}`}>
        <div className="bg-gray-50 dark:bg-gray-800">
          <Nav />
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={3}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
