import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color='white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
    }
  };

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
