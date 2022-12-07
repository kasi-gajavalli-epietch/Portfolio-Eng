import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Education from './components/Education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills'
import Resume from './components/Resume/Resume';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Education />
      <Resume />
      <Skills />
      <Portfolio />
      <Sidebar />
      <Contact />
      
    </div>
  );
}

export default App;
