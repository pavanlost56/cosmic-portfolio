'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

const experience = [
  {
    title: 'AI Developer Intern',
    company: 'VISWAM.AI',
    location: 'Hybrid',
    duration: 'May 2025 - June 2025',
    description: [
      'Fine-tuned ML models using Python for real-world AI solutions',
      'Built and deployed models using local datasets and open-source tools',
      'Implemented DevOps practices for smoother delivery and evaluation',
      'Collaborated with cross-functional teams to integrate AI systems',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'pandas'],
  },
  {
    title: 'Machine Learning Intern',
    company: 'CodeAlpha',
    location: 'Remote',
    duration: 'Oct 2024 - Nov 2024',
    description: [
      'Worked on ML model training and pipeline optimization using Python',
      'Performed data preprocessing to improve model performance',
      'Contributed to Git-based collaborative projects',
    ],
    technologies: ['Python', 'Scikit-learn', 'pandas', 'Matplotlib', 'Git'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Experience() {
  // Generate stable particle positions
  const particles = useMemo(() => {
    // Use a seeded random number generator for consistent values
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      // Round to 3 decimal places to prevent hydration mismatch
      x: Math.round(seededRandom(i * 5) * 1920 * 1000) / 1000,
      y: Math.round(seededRandom(i * 5 + 1) * 1080 * 1000) / 1000,
      duration: Math.round((seededRandom(i * 5 + 2) * 20 + 10) * 1000) / 1000,
    }));
  }, []);

  return (
    <section id="experience" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              transform: `translateX(${particle.x}px) translateY(${particle.y}px)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative solutions and leading teams to success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 blur-md" />
          </motion.div>

          <div className="space-y-20">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Glowing timeline node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                    delay: 0.5 
                  }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-6 h-6 bg-purple-500 rounded-full" />
                    <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping" />
                    <div className="absolute inset-[-4px] bg-purple-500/30 rounded-full blur-md" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative group">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p 
                            className="text-purple-400 font-medium text-lg flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </motion.p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-gray-400">
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.ul 
                        className="space-y-3 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-purple-400 mt-1">▸</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Technologies */}
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-300 rounded-full border border-purple-500/20 backdrop-blur-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
