import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
