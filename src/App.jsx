import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Education/>
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
