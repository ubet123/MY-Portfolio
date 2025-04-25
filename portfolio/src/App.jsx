import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import AnimatedCursor from './components/AnimatedCursor';


function App() {
  return (
    <>
    <AnimatedCursor/>
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;