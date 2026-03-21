import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

export default function ChubbyHead({ mouseX, mouseY }) {
  // If mouseX/mouseY aren't passed, use fallback static values or default hooks.
  const mX = mouseX || useMotionValue(0);
  const mY = mouseY || useMotionValue(0);

  // Parallax multi-layer mapping for deeper 3D effect
  const headRotateX = useTransform(mY, [-1, 1], [25, -25]);
  const headRotateY = useTransform(mX, [-1, 1], [-25, 25]);
  
  // Exaggerate feature rotation for "bulging" 3D roundness
  const featureDepthX = useTransform(mX, [-1, 1], [-12, 12]);
  const featureDepthY = useTransform(mY, [-1, 1], [-12, 12]);

  return (
    <motion.div
      style={{ 
        rotateX: headRotateX, 
        rotateY: headRotateY, 
        transformStyle: 'preserve-3d',
        perspective: '1200px'
      }}
      className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] shrink-0"
    >
      {/* Idle Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -18, 0], rotateZ: [0, 2, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Soft Shadow on Floor slightly reflecting light beneath */}
        <div 
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-[30px] rounded-full bg-black/60 blur-[20px]"
          style={{ transform: 'translateZ(-100px)' }}
        />

        {/* --- BACK LAYER --- */}
        {/* Ears */}
        <div 
          className="absolute top-[40%] -left-6 w-16 h-20 rounded-[2.5rem] bg-[#f2a89c] shadow-[inset_-10px_-5px_15px_rgba(200,80,80,0.3)] transition-colors duration-300"
          style={{ transform: 'translateZ(-60px) rotate(-15deg)' }}
        />
        <div 
          className="absolute top-[40%] -right-6 w-16 h-20 rounded-[2.5rem] bg-[#f2a89c] shadow-[inset_10px_-5px_15px_rgba(200,80,80,0.3)] transition-colors duration-300"
          style={{ transform: 'translateZ(-60px) rotate(15deg)' }}
        />

        {/* --- BASE SPHERE (HEAD) --- */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fff0eb] via-[#f7cfc6] to-[#df9281] shadow-[inset_-30px_-30px_60px_rgba(180,70,70,0.4),_0_20px_50px_rgba(0,0,0,0.4)] border border-[#ffffff]/30"
          style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
        >
          {/* Specular Ambient Light (Top Left) */}
          <div 
            className="absolute top-[6%] left-[10%] w-[50%] h-[50%] rounded-full bg-white mix-blend-overlay blur-[20px] opacity-70"
            style={{ transform: 'translateZ(5px)' }}
          />

          {/* Subsurface scattering (Soft reddish glow at the edge) */}
          <div className="absolute inset-0 rounded-full shadow-[inset_10px_10px_40px_rgba(255,255,255,0.6)] mix-blend-overlay pointer-events-none" />
        </div>

        {/* --- FRONT FEATURES LAYER --- */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            x: featureDepthX, 
            y: featureDepthY, 
            transform: 'translateZ(50px)', 
            transformStyle: 'preserve-3d' 
          }}
        >
          {/* Chubby Cheeks (Blush) */}
          <div className="absolute top-[60%] left-[10%] w-20 h-10 rounded-[50%] bg-[#ff7b7b] blur-[14px] opacity-35 mix-blend-multiply" />
          <div className="absolute top-[60%] right-[10%] w-20 h-10 rounded-[50%] bg-[#ff7b7b] blur-[14px] opacity-35 mix-blend-multiply" />

          {/* Eyes Container (Projected further forward) */}
          <div className="absolute inset-0" style={{ transform: 'translateZ(30px)' }}>
            {/* Left Eye */}
            <div className="absolute top-[45%] left-[26%] w-[1.5rem] h-[2.5rem] rounded-full bg-[#2a2a2a] shadow-[inset_0_4px_10px_rgba(0,0,0,0.9),_0_2px_4px_rgba(255,255,255,0.4)]">
              {/* Glossy catchlights */}
              <div className="absolute top-1.5 left-1 w-2.5 h-3.5 rounded-full bg-white opacity-90 blur-[0.6px]" />
              <div className="absolute bottom-2.5 right-1 w-1.5 h-1.5 rounded-full bg-white opacity-70 blur-[0.6px]" />
            </div>

            {/* Right Eye */}
            <div className="absolute top-[45%] right-[26%] w-[1.5rem] h-[2.5rem] rounded-full bg-[#2a2a2a] shadow-[inset_0_4px_10px_rgba(0,0,0,0.9),_0_2px_4px_rgba(255,255,255,0.4)]">
              <div className="absolute top-1.5 left-1 w-2.5 h-3.5 rounded-full bg-white opacity-90 blur-[0.6px]" />
              <div className="absolute bottom-2.5 right-1 w-1.5 h-1.5 rounded-full bg-white opacity-70 blur-[0.6px]" />
            </div>
          </div>

          {/* Nose (Soft and bulging) */}
          <div 
            className="absolute top-[58%] left-1/2 -translate-x-1/2 w-8 h-4.5 rounded-full bg-[#eb9a89] shadow-[inset_0_-3px_5px_rgba(200,80,80,0.5),_0_4px_6px_rgba(0,0,0,0.1)]"
            style={{ transform: 'translateZ(45px)' }}
          />

          {/* Minimal Mouth */}
          <div 
            className="absolute top-[70%] left-1/2 -translate-x-1/2 w-6 h-5 border-b-[4px] border-b-[#7a3b32] rounded-full opacity-80"
            style={{ transform: 'translateZ(40px)' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
