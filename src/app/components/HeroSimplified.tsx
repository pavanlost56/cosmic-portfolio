'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX, FileText, Download, ExternalLink } from 'lucide-react';

export default function HeroSimplified() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  
  // Personal details - Update these with your actual information
  const personalDetails = {
    education: 'B.Tech in Computer Science',
    university: 'Your University Name', // TODO: Update with your university
    location: 'Hyderabad, India',
    interests: ['Artificial Intelligence', 'Machine Learning', 'Backend Development'],
    languages: ['English', 'Telugu', 'Hindi'],
    hobbies: ['Reading Tech Blogs', 'Problem Solving', 'Learning New Technologies']
  };
  
  // Name translations in different languages
  const nameTranslations = [
    { lang: 'English', name: 'Ajmeera Pavan Kumar', greeting: 'Hello, I am', langCode: 'en-US' },
    { lang: 'Hindi', name: 'अजमीरा पवन कुमार', greeting: 'नमस्ते, मैं हूं', langCode: 'hi-IN' },
    { lang: 'Spanish', name: 'Ajmeera Pavan Kumar', greeting: 'Hola, soy', langCode: 'es-ES' },
    { lang: 'French', name: 'Ajmeera Pavan Kumar', greeting: 'Bonjour, je suis', langCode: 'fr-FR' },
    { lang: 'German', name: 'Ajmeera Pavan Kumar', greeting: 'Hallo, ich bin', langCode: 'de-DE' },
    { lang: 'Japanese', name: 'アジメーラ・パヴァン・クマール', greeting: 'こんにちは、私は', langCode: 'ja-JP' },
    { lang: 'Telugu', name: 'అజ్మీరా పవన్ కుమార్', greeting: 'నమస్తే, నేను', langCode: 'te-IN' },
    { lang: 'Chinese', name: '阿杰梅拉·帕万·库马尔', greeting: '你好，我是', langCode: 'zh-CN' },
  ];

  // Cycle through name translations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % nameTranslations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Load voices when component mounts
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices
      window.speechSynthesis.getVoices();
      
      // Some browsers need this event to load voices
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Speak name in current language
  const speakName = async () => {
    if ('speechSynthesis' in window) {
      try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Wait a bit for the cancel to complete
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const currentTranslation = nameTranslations[currentNameIndex];
        
        // Always use English pronunciation for the name
        // This ensures consistency and avoids voice availability issues
        const textToSpeak = 'Ajmeera Pavan Kumar';
        
        // Create utterance with English text
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        // Set voice parameters
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Try to use the appropriate language voice if available
        const voices = window.speechSynthesis.getVoices();
        const targetVoice = voices.find(voice => 
          voice.lang.startsWith(currentTranslation.langCode.split('-')[0])
        );
        
        if (targetVoice) {
          utterance.voice = targetVoice;
          utterance.lang = currentTranslation.langCode;
        } else {
          // Fallback to default English voice
          utterance.lang = 'en-US';
        }
        
        // Add error handling
        utterance.onerror = (event) => {
          console.warn('Speech synthesis error, using fallback:', event.error);
          setIsSpeaking(false);
          
          // Try fallback with basic English
          const fallbackUtterance = new SpeechSynthesisUtterance('Ajmeera Pavan Kumar');
          fallbackUtterance.lang = 'en-US';
          fallbackUtterance.rate = 0.9;
          
          fallbackUtterance.onstart = () => setIsSpeaking(true);
          fallbackUtterance.onend = () => setIsSpeaking(false);
          fallbackUtterance.onerror = () => setIsSpeaking(false);
          
          window.speechSynthesis.speak(fallbackUtterance);
        };
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        
        // Speak the utterance
        window.speechSynthesis.speak(utterance);
        
      } catch (error) {
        console.warn('Speech synthesis not available:', error);
        setIsSpeaking(false);
      }
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }
  };

  // Generate stable star positions
  const stars = useMemo(() => {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.round(seededRandom(i * 2) * 1920 * 1000) / 1000,
      y: Math.round(seededRandom(i * 2 + 1) * 1080 * 1000) / 1000,
      duration: Math.round((seededRandom(i * 3) * 3 + 2) * 1000) / 1000,
      delay: Math.round(seededRandom(i * 4) * 2 * 1000) / 1000,
    }));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              transform: `translateX(${star.x}px) translateY(${star.y}px)`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-8 md:gap-16">
          {/* Content - Left side */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Language indicator */}
            <motion.div
              className="text-sm text-gray-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-gray-800/50 rounded-full">
                {nameTranslations[currentNameIndex].lang}
              </span>
            </motion.div>

            {/* Greeting */}
            <p className="text-lg md:text-xl text-gray-400 mb-2">
              {nameTranslations[currentNameIndex].greeting}
            </p>

            {/* Name with translation animation */}
            <div className="relative h-16 md:h-20 mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentNameIndex}
                  className="absolute inset-0 flex items-center justify-center md:justify-start text-3xl md:text-4xl lg:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
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
            <p className="text-xl md:text-2xl text-white mb-6">
              AI/ML Developer | Backend Developer
            </p>

            {/* Personal Information */}
            <motion.div 
              className="space-y-4 mb-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* About Me Summary */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  A passionate developer with expertise in AI/ML and backend technologies. 
                  I love building intelligent systems and solving complex problems. 
                  Currently focused on deep learning and scalable backend architectures.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Education</p>
                    <p className="text-sm text-gray-300">{personalDetails.education}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm text-gray-300">{personalDetails.location}</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Languages</p>
                    <p className="text-sm text-gray-300">{personalDetails.languages.join(', ')}</p>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Focus Areas</p>
                    <p className="text-sm text-gray-300">AI/ML, Backend Systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Resume Preview Button */}
              <motion.a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/Resume.pdf"
                download="Ajmeera_Pavan_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500/50 text-purple-400 rounded-full font-medium hover:bg-purple-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>

              {/* Contact Button */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-gray-800/50 hover:border-gray-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Photo - Right side */}
          <motion.div
            className="flex-shrink-0 order-first md:order-last"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3
            }}
          >
            <div className="relative">
              {/* Static glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-xl" />
              
              {/* Photo container - Circular, no animations */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto">
                {/* Static gradient border */}
                <div className="absolute inset-0 rounded-full shadow-xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />
                
                {/* Inner background */}
                <div className="absolute inset-[3px] bg-[#0a0a0f] rounded-full" />
                
                {/* Photo wrapper */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden group cursor-pointer">
                  {/* Subtle overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
                    className="object-cover object-center"
                    priority
                    quality={100}
                    style={{
                      objectPosition: '50% 30%'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
