import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, MousePointer2 } from 'lucide-react';

const projects = [
  {
    title: "Neon Nexus Dashboard",
    description: "A high-performance analytics dashboard with real-time data visualization and glassmorphism UI.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Aura E-Commerce platform",
    description: "Premium shopping experience featuring complex layout animations and WebGL product showcase.",
    tech: ["Next.js", "Three.js", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Quantum Landing Page",
    description: "Conversion-optimized SaaS landing page with scroll-triggered storytelling and neon aesthetics.",
    tech: ["Vite", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  }
];

// Combine exactly 6 duplicate sets to ensure the user practically never hits the absolute edges while dragging
const extendedProjects = [...projects, ...projects, ...projects, ...projects, ...projects, ...projects];

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  // Auto-scrolling base speed (pixels per frame roughly)
  const baseVelocity = -0.5;

  useAnimationFrame((time, delta) => {
    // Pause automatic scroll when user hovers or is manually dragging
    if (isHovered || isDragging) return;
    
    // Normalize delta across typical 60fps monitors (16.6ms)
    let moveBy = baseVelocity * (delta / 16);
    let currentX = x.get() + moveBy;
    
    if (trackRef.current) {
      const scrollWidth = trackRef.current.scrollWidth;
      // Because we duplicated the array 6 times, each distinct block has width = totalScrollWidth / 6
      // Snapping by exactly one original array's width gives seamless looping
      const blockWidth = scrollWidth / 6;

      // Wrap if scrolling left past the end of block 3
      if (currentX <= -(blockWidth * 3)) {
        currentX += blockWidth;
      } 
      // Wrap if somehow dragged far to the right above 0
      else if (currentX > 0) {
        currentX -= blockWidth;
      }
    }
    
    x.set(currentX);
  });

  return (
    <section id="projects" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              A selection of my recent work focusing on interaction, performance, and aesthetic excellence.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-text-secondary/60 text-sm font-medium animate-pulse">
            <MousePointer2 size={16} />
            <span>Hover to pause • Drag to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Carousel Container */}
      <div 
        className="relative w-full py-8 pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          // Gradient fade on the left and right edges for a premium vignette look
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <motion.div 
          ref={trackRef}
          className="flex gap-8 w-max px-[20vw] items-center cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          // Inhibit y-axis drag completely
          dragDirectionLock
          // Huge virtual constraints to allow continuous dragging before loop catches it
          dragConstraints={{ left: -10000, right: 0 }}
          dragElastic={0.05}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {extendedProjects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Separate component to handle individual mouse-tilt calculation per card
function ProjectCard({ project }) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Map mouse position offset to a 3D rotation angle
  const rotateX = useTransform(cardY, [-150, 150], [8, -8]);
  const rotateY = useTransform(cardX, [-150, 150], [-8, 8]);
  const glowOpacity = useTransform(cardY, [-150, 150], [0.1, 0.4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    cardX.set(e.clientX - centerX);
    cardY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[320px] md:w-[450px] shrink-0 glass rounded-3xl overflow-hidden relative group border border-border hover:border-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Dynamic Hover Glow Background linked to mouse position */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-blue-500 rounded-3xl z-0 pointer-events-none mix-blend-screen"
        style={{ opacity: glowOpacity, filter: "blur(40px)" }}
      />
      
      {/* Image Container with hover zoom */}
      <div className="relative h-60 overflow-hidden bg-surface/80 border-b border-border z-10">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
          draggable="false"
        />
      </div>

      {/* Content Layer (Lifted over glow via Z-index and TranslateZ) */}
      <div className="p-8 relative z-20 bg-surface/60 backdrop-blur-md" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold font-sans tracking-tight mb-3 text-white drop-shadow-md">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-6 text-sm md:text-base line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-primary/90 tracking-wide backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex-1 py-3 bg-gradient-to-r from-primary to-blue-600 rounded-xl font-bold text-white text-sm shadow-[0_0_15px_rgba(97,62,234,0.4)] hover:shadow-[0_0_25px_rgba(97,62,234,0.7)] transition-shadow flex items-center justify-center gap-2 group/btn border border-white/10">
            <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> Live Demo
          </button>
          
          <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-colors">
            <Github size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
