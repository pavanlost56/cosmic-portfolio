'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useMemo } from 'react';
import Image from 'next/image';

export default function Hero() {
  const technologies = ['Python', 'TensorFlow', 'Go', 'Java', 'Spring Boot'];

  // Generate stable star positions
  const stars = useMemo(() => {
    // Use a seeded random number generator for consistent values
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      // Round to 3 decimal places to prevent hydration mismatch
      x: Math.round(seededRandom(i * 2) * 1920 * 1000) / 1000,
      y: Math.round(seededRandom(i * 2 + 1) * 1080 * 1000) / 1000,
      duration: Math.round((seededRandom(i * 3) * 3 + 2) * 1000) / 1000,
      delay: Math.round(seededRandom(i * 4) * 2 * 1000) / 1000,
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              transform: `translateX(${star.x}px) translateY(${star.y}px)`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        {/* Main content */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo */}
          <motion.div
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px] relative overflow-hidden group shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: 'blur(20px)' }}
              />
              <div className="w-full h-full bg-[#0a0a0f] rounded-full overflow-hidden relative z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                    className="object-cover object-center"
                    priority
                    quality={100}
                    style={{
                      objectPosition: '50% 30%' // Adjust this to perfectly center the face
                    }}
                  />
                </div>
              </div>
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
            </div>
          </motion.div>

          {/* Name with letter animation */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <motion.span className="inline-block">
              {personalInfo.name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${
                    index < personalInfo.name.indexOf(' ', personalInfo.name.indexOf(' ') + 1)
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                  }`}
                  initial={{ opacity: 0, y: 50, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 150,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.p
            className="text-xl md:text-2xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI/ML Developer | Backend Developer
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="text-gray-400 space-y-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="flex items-center justify-center gap-2 text-sm">
              <span>📞</span>
              <a href="tel:+919440926408" className="hover:text-white transition-colors">+91-9440926408</a>
              <span className="text-gray-600 mx-2">|</span>
              <span>📧</span>
              <a href="mailto:pavankumar22119@gmail.com" className="hover:text-white transition-colors">pavankumar22119@gmail.com</a>
            </p>
            <p className="flex items-center justify-center gap-4 text-sm">
              <a href="https://www.linkedin.com/in/pavan-kumar-ajmeera-8b3ba3318/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                <span>🔗</span> LinkedIn
              </a>
              <a href="https://github.com/pavanlost56" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                <span>🔗</span> GitHub
              </a>
            </p>
          </motion.div>

          {/* Tech badges with bounce animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-purple-500/50 text-purple-400 rounded-full font-medium hover:bg-purple-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -inset-[10px] opacity-50"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [-50, 50, -50],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
