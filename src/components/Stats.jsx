import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Years Experience", value: "3+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "10+" }
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-border bg-surface/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/0 md:divide-border">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center md:items-start md:pl-8 first:pl-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
            >
              <h4 className="text-4xl md:text-5xl font-display font-black glow-text mb-2">
                {stat.value}
              </h4>
              <p className="text-sm text-text-secondary uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
