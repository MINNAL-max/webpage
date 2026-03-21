import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden font-sans selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-surface/80 backdrop-blur-md rounded-full border border-border overflow-hidden z-[100] hidden md:block shadow-lg">
        <motion.div 
          className="w-full h-full bg-glow-gradient origin-top"
          style={{ scaleY: scrollSpring }}
        />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;
