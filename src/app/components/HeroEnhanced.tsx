'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react';

export default function HeroEnhanced() {
  const technologies = ['Python', 'TensorFlow', 'Go', 'Java', 'Spring Boot'];
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  
  // Name translations in different languages
  const nameTranslations = [
    { lang: 'English', name: 'Ajmeera Pavan Kumar', greeting: 'Hello, I am' },
    { lang: 'Hindi', name: 'अजमीरा पवन कुमार', greeting: 'नमस्ते, मैं हूं' },
    { lang: 'Spanish', name: 'Ajmeera Pavan Kumar', greeting: 'Hola, soy' },
    { lang: 'French', name: 'Ajmeera Pavan Kumar', greeting: 'Bonjour, je suis' },
    { lang: 'German', name: 'Ajmeera Pavan Kumar', greeting: 'Hallo, ich bin' },
    { lang: 'Japanese', name: 'アジメーラ・パヴァン・クマール', greeting: 'こんにちは、私は' },
    { lang: 'Telugu', name: 'అజ్మీరా పవన్ కుమార్', greeting: 'నమస్తే, నేను' },
    { lang: 'Chinese', name: '阿杰梅拉·帕万·库马尔', greeting: '你好，我是' },
  ];

  // Cycle through name translations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % nameTranslations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate stable star positions
  const stars = useMemo(() => {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.round(seededRandom(i * 2) * 1920 * 1000) / 1000,
      y: Math.round(seededRandom(i * 2 + 1) * 1080 * 1000) / 1000,
      duration: Math.round((seededRandom(i * 3) * 3 + 2) * 1000) / 1000,
      delay: Math.round(seededRandom(i * 4) * 2 * 1000) / 1000,
    }));
  }, []);

  const speakName = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance('Ajmeera Pavan Kumar');
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Set language based on current translation
      const langMap: { [key: string]: string } = {
        'English': 'en-US',
        'Hindi': 'hi-IN',
        'Spanish': 'es-ES',
        'French': 'fr-FR',
        'German': 'de-DE',
        'Japanese': 'ja-JP',
        'Telugu': 'te-IN',
        'Chinese': 'zh-CN'
      };
      
      utterance.lang = langMap[nameTranslations[currentNameIndex].lang] || 'en-US';
      utterance.text = nameTranslations[currentNameIndex].name;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

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

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Main content */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo - Positioned to the left */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
            >
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 w-52 h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 -top-2 -left-2 md:-top-4 md:-left-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
                <div className="absolute inset-2 rounded-full border border-blue-500/20" />
                <div className="absolute inset-4 rounded-full border border-pink-500/20" />
              </motion.div>

              {/* Main photo container */}
              <div className="relative group">
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-30 blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Photo border with gradient */}
                <motion.div 
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[4px] relative overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: 'blur(20px)' }}
                  />
                  
                  {/* Inner container */}
                  <div className="w-full h-full bg-[#0a0a0f] rounded-full overflow-hidden relative z-10">
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%', y: '-100%' }}
                      animate={{ x: '100%', y: '100%' }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Profile image */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/profile.jpg"
                        alt={personalInfo.name}
                        fill
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
                        className="object-cover object-center scale-110"
                        priority
                        quality={100}
                        style={{
                          objectPosition: '50% 30%'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                </motion.div>

                {/* Orbiting particles */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 72, 144, 216, 288].map((rotation, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1"
                      style={{ 
                        transform: `rotate(${rotation}deg) translateX(130px)`
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                        animate={{ 
                          scale: [0.5, 1, 0.5],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Language indicator */}
          <motion.div
            className="text-sm text-gray-500 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-gray-800/50 rounded-full">
              {nameTranslations[currentNameIndex].lang}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {nameTranslations[currentNameIndex].greeting}
          </motion.p>

          {/* Name with translation animation */}
          <div className="relative h-20 md:h-24 lg:h-28 mb-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentNameIndex}
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.8 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  {nameTranslations[currentNameIndex].name}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Speaker button */}
          <motion.button
            onClick={speakName}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 rounded-full transition-all duration-300 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {isSpeaking ? (
              <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-400" />
            )}
            <span className="text-sm text-gray-300">
              {isSpeaking ? 'Speaking...' : 'Pronounce my name'}
            </span>
          </motion.button>

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
