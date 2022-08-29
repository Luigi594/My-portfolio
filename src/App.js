import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <section id='hero-section'>
          <HeroSection />
        </section>

        <section id='about-me'>
          <AboutMe />
        </section>

        <section id='skills'>
          <Skills />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='contact'>
          <Contact />
        </section>
        <Footer />
    </div>
  );
}

export default App;
