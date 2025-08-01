'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
  Sparkles,
  Clock,
  TrendingUp,
  Star
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

// Learning goals for each technology
const learningGoals = {
  'Machine Learning': ['Master neural networks', 'Deploy ML models', 'Advanced algorithms'],
  'Deep Learning': ['CNN architectures', 'Transformer models', 'Computer vision'],
  'Go': ['Concurrency patterns', 'Microservices', 'Performance optimization'],
  'Cloud Computing (AWS)': ['Serverless architecture', 'Cost optimization', 'Security best practices'],
  'DevOps': ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging'],
  'Kubernetes': ['Cluster management', 'Service mesh', 'Auto-scaling'],
  'GraphQL': ['Schema design', 'Real-time subscriptions', 'Performance optimization'],
  'System Design': ['Distributed systems', 'Scalability patterns', 'High availability'],
};

export default function LearningEnhanced() {
  const [mounted, setMounted] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const getSkillLevel = (progress: number) => {
    if (progress < 30) return 'beginner';
    if (progress < 70) return 'intermediate';
    return 'advanced';
  };

  const filteredLearning = learning.filter(item => {
    if (activeFilter === 'all') return true;
    const level = getSkillLevel(item.progress || 50);
    return level === activeFilter;
  });

  if (!mounted) {
    return (
      <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-medium">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Always Learning</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Currently Mastering
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">Expanding my expertise with cutting-edge technologies</p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {['all', 'beginner', 'intermediate', 'advanced'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredLearning.map((item, index) => {
              const IconComponent = technologyIcons[item.name as keyof typeof technologyIcons] || Zap;
              const progressPercentage = item.progress || 50;
              const skillLevel = getSkillLevel(progressPercentage);
              const goals = learningGoals[item.name as keyof typeof learningGoals] || [];
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedTech(item.name)}
                >
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    hoveredIndex === index 
                      ? 'from-purple-600/30 to-blue-600/30' 
                      : 'from-purple-600/10 to-blue-600/10'
                  } opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                  
                  {/* Card */}
                  <motion.div 
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 p-6 rounded-2xl transition-all duration-300 cursor-pointer h-full"
                    whileHover={{ 
                      y: -8,
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                  >
                    {/* Status badge */}
                    <div className="absolute top-2 right-2">
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          skillLevel === 'advanced' ? 'bg-green-400' :
                          skillLevel === 'intermediate' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    {/* Icon with dock-style animation */}
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -5, 5, 0],
                        y: -5
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400,
                        damping: 15
                      }}
                    >
                      <div className="w-14 h-14 mx-auto flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl relative overflow-hidden border border-gray-700/50">
                        <IconComponent className={`w-7 h-7 ${
                          hoveredIndex === index ? 'text-purple-400' : 'text-gray-400'
                        } relative z-10 transition-colors duration-300`} />
                        
                        {/* Dock-style background glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Icon shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-50, 50] }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                            delay: index * 0.5
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className={`text-center mb-2 font-semibold transition-colors ${
                      hoveredIndex === index ? 'text-purple-400' : 'text-white'
                    }`}>
                      {item.name}
                    </h3>

                    {/* Skill level badge */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          skillLevel === 'advanced' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          skillLevel === 'intermediate' 
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)} Level
                      </motion.div>
                    </div>
                    
                    {/* Learning status dock */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-xs">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Currently Learning
                        </span>
                      </div>
                      
                      {/* Animated status dock */}
                      <div className="flex justify-center">
                        <motion.div
                          className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50"
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* Learning indicators */}
                          <motion.div
                            className={`w-2 h-2 rounded-full ${
                              progressPercentage > 70 ? 'bg-green-400' :
                              progressPercentage > 40 ? 'bg-yellow-400' :
                              'bg-blue-400'
                            }`}
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: index * 0.2
                            }}
                          />
                          <span className="text-xs text-gray-400">Active</span>
                          <motion.div
                            className="w-1 h-1 bg-gray-500 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Learning streak badge */}
                    <div className="mt-4 flex justify-center">
                      <motion.div
                        className="flex items-center gap-2 text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full px-3 py-1"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(147, 51, 234, 0.15)'
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                        >
                          <TrendingUp className="w-3 h-3" />
                        </motion.div>
                        <span>Learning Streak</span>
                      </motion.div>
                    </div>
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Tech detail modal */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
              onClick={() => setSelectedTech(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {technologyIcons[selectedTech as keyof typeof technologyIcons] && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        {(() => {
                          const Icon = technologyIcons[selectedTech as keyof typeof technologyIcons] || Zap;
                          return <Icon className="w-10 h-10 text-purple-400" />;
                        })()}
                      </motion.div>
                    )}
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedTech}</h3>
                    <p className="text-gray-400">Learning Journey</p>
                  </div>

                  {/* Learning goals */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Current Goals</h4>
                    {learningGoals[selectedTech as keyof typeof learningGoals]?.map((goal, index) => (
                      <motion.div
                        key={goal}
                        className="flex items-center gap-3 text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Target className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{goal}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                      onClick={() => setSelectedTech(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                    <motion.button
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Keep Learning!
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
