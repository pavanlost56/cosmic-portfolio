'use client';

import { motion } from 'framer-motion';
import { Clock, Briefcase, Code, CheckCircle } from 'lucide-react';
import { stats } from '@/lib/data';

const iconMap = {
  Clock,
  Briefcase,
  Code,
  CheckCircle,
};

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? iconMap[stat.icon as keyof typeof iconMap] : null;
            
            return (              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotateX: 0 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="text-center p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-500 morphing-border ripple enhanced-hover group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {IconComponent && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    className="inline-block"
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-4 text-black neon-glow" />
                  </motion.div>
                )}
                <motion.h3 
                  className="text-3xl font-bold text-black mb-2 glitch-effect"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.15 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-medium morphing-underline"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.15 + 0.7,
                    duration: 0.6
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
