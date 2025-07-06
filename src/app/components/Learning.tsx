'use client';

import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code2, 
  GitBranch, 
  Globe, 
  Layers, 
  Brain,
  Container, 
  Cpu,
  Terminal,
  Zap,
  BookOpen,
  Trophy,
  Target,
  Sparkles
} from 'lucide-react';
import { learning } from '@/lib/data';
import { useEffect, useState } from 'react';

const technologyIcons = {
  'Machine Learning': Brain,
  'Deep Learning': Cpu,
  'Go': Code2,
  'Cloud Computing (AWS)': Cloud,
  'DevOps': GitBranch,
  'Kubernetes': Container,
  'GraphQL': Globe,
  'System Design': Layers,
};

export default function Learning() {
  const [mounted, setMounted] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-medium">In Progress</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Currently Learning</h2>
            <p className="text-xl text-gray-400">Expanding my knowledge with cutting-edge technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learning.map((item) => {
              const IconComponent = technologyIcons[item.name as keyof typeof technologyIcons] || Zap;
              const progressPercentage = item.progress || 50;
              
              return (
                <div key={item.name} className="group relative">
                  <div className="absolute inset-0 bg-gray-700/20 opacity-0 blur-xl transition-opacity duration-500 -z-10" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 p-6 rounded-xl transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gray-800/50 rounded-lg relative overflow-hidden">
                        <IconComponent className="w-6 h-6 text-gray-400 relative z-10" />
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-center mb-4">
                      {item.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Progress</span>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gray-600 rounded-full"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm font-medium">In Progress</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Currently Learning</h2>
          <p className="text-xl text-gray-400">Expanding my knowledge with cutting-edge technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learning.map((item, index) => {
            const IconComponent = technologyIcons[item.name as keyof typeof technologyIcons] || Zap;
            const progressPercentage = item.progress || 50;
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
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
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gray-700/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 p-6 rounded-xl transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gray-800/50 rounded-lg relative overflow-hidden">
                      <IconComponent className="w-6 h-6 text-gray-400 relative z-10" />
                      
                      {/* Icon shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-50, 50] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear"
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-white font-semibold text-center mb-4">
                    {item.name}
                  </h3>
                  
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Progress</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gray-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progressPercentage}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Progress bar shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: [-100, 200] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: index * 0.1
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
