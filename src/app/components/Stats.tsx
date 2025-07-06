'use client';

import { motion } from 'framer-motion';
import { Clock, Briefcase, Code, CircleCheckBig } from 'lucide-react';
import { stats } from '@/lib/data';

const iconMap = {
  Clock,
  Briefcase,
  Code,
  CircleCheckBig,
};

export default function Stats() {
  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon ? iconMap[stat.icon as keyof typeof iconMap] : null;
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 p-8 rounded-2xl transition-all duration-300 text-center hover:bg-gray-900/50">
                  {IconComponent && (
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-4"
                    >
                      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <p className="text-gray-400 font-medium">
                    {stat.label}
                  </p>
                  
                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
