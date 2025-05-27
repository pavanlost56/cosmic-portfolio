'use client';

import { motion } from 'framer-motion';
import { 
  Database, 
  Code2, 
  Binary, 
  Globe, 
  Box, 
  Brain,
  Container, 
  GanttChartSquare
} from 'lucide-react';
import { learning } from '@/lib/data';

const technologyIcons = {
  'GraphQL': Database,
  'Rust': Code2,
  'Web3/Blockchain': Binary,
  'Astro': Globe,
  'Three.js': Box,
  'Machine Learning': Brain,
  'Kubernetes': Container,
  'Go': GanttChartSquare,
};

export default function Learning() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Currently Learning</h2>
          <p className="text-xl text-gray-600">Expanding my technical horizons</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learning.map((item, index) => {
            const IconComponent = technologyIcons[item.name as keyof typeof technologyIcons];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-all duration-500 text-center group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-black transition-colors" />
                  )}
                  
                  {/* Floating knowledge particles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-black rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-bold text-black mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.h3>
                
                {item.progress && (
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <motion.span 
                        className="text-gray-600"
                        whileHover={{ x: 3 }}
                      >
                        Progress
                      </motion.span>
                      <motion.span
                        className="text-black font-medium"
                        whileHover={{ x: -3 }}
                      >
                        {item.progress}%
                      </motion.span>
                    </div>
                    
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
