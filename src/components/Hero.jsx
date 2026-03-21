import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ChubbyHead from './ChubbyHead';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize mouse position from -1 to 1 based on screen center
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax for Sphere (faster/more movement)
  const sphereX = useTransform(mouseX, [-1, 1], [-60, 60]);
  const sphereY = useTransform(mouseY, [-1, 1], [-60, 60]);

  // Parallax for Text (slower/less movement to create depth)
  const textX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const textY = useTransform(mouseY, [-1, 1], [-20, 20]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#060814] via-[#02030a] to-black"
    >
      {/* Deep Background Dynamic Glow */}
      <motion.div 
        style={{ x: sphereX, y: sphereY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[700px] h-[700px] rounded-full bg-primary/20 blur-[150px] pointer-events-none mix-blend-screen opacity-20 z-0" 
      />

      {/* Foreground Header Text Layer */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="absolute z-40 top-12 left-8 md:top-24 md:left-24 pointer-events-none select-none"
      >
        <h1 
          className="text-[18vw] md:text-[220px] font-sans font-black tracking-tighter leading-[0.9] text-white whitespace-nowrap drop-shadow-2xl"
        >
          HI, I'M AMITH
        </h1>
      </motion.div>

      {/* 3D Stylized Chubby Head Centerpiece */}
      <motion.div 
        style={{ 
          x: sphereX, 
          y: sphereY, 
          perspective: '1500px'
        }}
        // Pushed slightly down to avoid vertical collision with text
        className="relative z-30 shrink-0 mt-48 md:mt-80"
      >
        <ChubbyHead mouseX={mouseX} mouseY={mouseY} />
      </motion.div>

    </section>
  );
}
