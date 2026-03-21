import React from 'react';
import { Github, Twitter, Linkedin, Dribbble, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-transparent border-t border-border mt-32 relative overflow-hidden">
      {/* Background glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-accent/30 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-primary/40 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Massive CTA */}
        <div className="glass rounded-[2rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden mb-24 glow-border">
          <div className="absolute inset-0 bg-glass-gradient pointer-events-none z-0"></div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 max-w-3xl leading-tight relative z-10">
            Let's Build Something <span className="glow-text">Amazing</span> Together
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl relative z-10">
            Available for freelance, collaboration, and full-time opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <button className="px-10 py-5 rounded-xl bg-primary text-secondary font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(97,62,234,0.6)]">
              Hire Me
            </button>
            <button className="px-10 py-5 rounded-xl bg-surface border border-border font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 shadow-glass backdrop-blur-xl">
              Book a Call <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl font-black font-display tracking-wider glow-text mb-6">
              PORTFOLIO.
            </div>
            <p className="text-text-secondary max-w-sm">
              Personal portfolio showcasing projects, skills, and modern digital experiences designed with precision and intention.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Links</h4>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-secondary hover:border-secondary transition-all hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all hover:-translate-y-1">
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>© 2026 Your Name. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with React, Tailwind & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}
