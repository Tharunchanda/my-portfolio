import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
