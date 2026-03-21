import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ["Home", "About", "Projects", "Skills"];
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "Home";
      
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          // Offset to trigger actively while scrolling down
          if (scrollY >= sectionTop - 400) {
            current = item;
          }
        }
      });
      
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {navItems.map((item, index) => {
        const isActive = activeTab === item;
        
        return (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleClick(e, item)}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={`pointer-events-auto relative group flex items-center justify-center px-5 py-2.5 rounded-full transition-all duration-300 ease-out backdrop-blur-md
              ${
                isActive 
                  ? 'bg-primary/20 border border-primary/40 shadow-[0_0_20px_rgba(97,62,234,0.5)] scale-105' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(97,62,234,0.3)] hover:scale-105'
              }
            `}
          >
            {/* Active Glow Fill Backdrop */}
            {isActive && (
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/30 to-blue-500/20 rounded-full blur-[4px] -z-10" />
            )}
            
            <span 
              className={`text-xs tracking-wider uppercase font-semibold transition-colors duration-300
                ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'text-white/50 group-hover:text-white/90'}
              `}
            >
              {item}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
}
