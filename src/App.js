import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>

      <div className="hero-section">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
