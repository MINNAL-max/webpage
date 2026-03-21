import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Server, Zap } from 'lucide-react';

const skills = [
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with React, Vite, and modern CSS."
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "UI/UX Design",
    description: "Creating premium digital experiences focused on user interaction, typography, and visual hierarchy."
  },
  {
    icon: <Zap className="w-8 h-8 text-secondary" />,
    title: "Performance Optimization",
    description: "Ensuring 60fps animations, optimized bundle sizes, and perfect Core Web Vitals scores."
  },
  {
    icon: <Server className="w-8 h-8 text-purple-400" />,
    title: "Backend Integration",
    description: "Seamlessly connecting frontends with robust APIs, databases, and headless CMS architecture."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">What I <span className="glow-text">Do</span></h2>
          </motion.div>
          
          <motion.p 
            className="text-text-secondary text-lg max-w-md md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
          >
            A multi-disciplinary approach to crafting digital products that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
             <motion.div 
              key={idx}
              className="glass p-8 rounded-3xl relative overflow-hidden group border border-border hover:border-transparent transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Neon Outline Hover Effect via CSS before */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.4), rgba(0, 209, 255, 0.4))', padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
              
              <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">{skill.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
