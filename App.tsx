import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Web3 from './components/Web3';
import Process from './components/Process';
import Collaborations from './components/Collaborations';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    
    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Cleanup the event listener
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className={`bg-black text-white font-sans antialiased overflow-x-hidden transition-opacity duration-700 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Web3 />
        <Process />
        <Collaborations />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;