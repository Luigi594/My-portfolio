import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>

      <div className="hero-section">
        <HeroSection />
      </div>

      <div className="about-me">
        <AboutMe />
      </div>

      <div className="skills">
        <Skills />
      </div>

      <div className="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
