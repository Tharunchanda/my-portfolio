import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Experience/>
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
