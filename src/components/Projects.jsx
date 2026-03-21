import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Featured <span className="glow-text">Projects</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            A selection of my recent work focusing on interaction, performance, and aesthetic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative border border-border hover:border-primary/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 80, damping: 15 }}
            >
              {/* Image Container with hover zoom */}
              <div className="relative h-60 overflow-hidden bg-surface/50">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Subtle border glow on hover via CSS before element */}
                <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 z-0"></div>
                
                <h3 className="text-2xl font-bold font-display mb-3 relative z-10">{project.title}</h3>
                <p className="text-text-secondary mb-6 relative z-10 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-surface/80 border border-border rounded-full text-xs font-semibold text-primary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <button className="flex-1 py-3 bg-surface border border-border rounded-xl font-bold text-sm hover:bg-primary hover:border-primary transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="p-3 bg-background border border-border rounded-xl hover:text-primary transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
