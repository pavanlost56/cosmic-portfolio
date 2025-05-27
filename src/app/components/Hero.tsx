'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useTypewriter } from '@/app/hooks/useTypewriter';
import Image from 'next/image';

export default function Hero() {
  const { displayText: typedRole, isComplete } = useTypewriter(
    personalInfo.role,
    50,
    1000
  );

  const letters = personalInfo.name.split("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Mobile-first layout with profile photo integrated */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Main content - left side on desktop, full width on mobile */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >              {/* Name */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 lg:mb-6 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {personalInfo.name}
              </motion.h1>

              {/* Role with typewriter effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 min-h-[3rem] flex items-center justify-center lg:justify-start"
              >
                <span>
                  {typedRole}
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  <span>Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile photo - right side on desktop, top on mobile */}
          <motion.div
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 overflow-hidden rounded-full border-4 border-black shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Ajmeera Pavan Kumar"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 192px, 224px"
                  priority
                />
              </div>
              
              {/* Animated border ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gray-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}              />
            </div>
          </motion.div>
        </div>
        
        {/* Simple scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-4 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
