import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Contact from './components/Contact';
// import ThemeToggle from'./components/ThemeToggle';
import './App.css';
function App() {
  return (
    <Router>
      {/* <ThemeToggle /> */}
      <Header />
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;