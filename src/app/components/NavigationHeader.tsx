'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, FolderOpen, Mail, Layers, Sparkles } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'Tech Stack', href: '#techstack', icon: Layers },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Learning', href: '#learning', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function NavigationHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit"
        >
          <nav className="relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
            
            <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 shadow-[0_0_40px_rgba(147,51,234,0.3)]">
              <div className="flex items-center justify-center">

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                  <div className="flex items-center gap-1">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="relative group"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-gray-300 hover:text-white'
                          }`}>
                            {/* Hover effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
                            
                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 rounded-full"
                                transition={{ type: "spring", duration: 0.6 }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-md opacity-50" />
                                <div className="absolute inset-[1px] bg-black/50 rounded-full" />
                              </motion.div>
                            )}
                            
                            <Icon size={16} className="relative z-10" />
                            <span className="text-xs font-medium relative z-10">{item.name}</span>
                            
                            {/* Active dot indicator */}
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                              />
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative p-2.5 text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative z-10">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </div>
                </motion.button>
              </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pt-4 border-t border-white/10"
                >
                  <div className="space-y-2">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`relative flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 group ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {/* Background effect */}
                          <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                              : 'bg-white/0 hover:bg-white/5'
                          }`} />
                          
                          <Icon size={20} className="relative z-10" />
                          <span className="font-medium relative z-10">{item.name}</span>
                          
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute right-4 w-2 h-2 bg-purple-400 rounded-full"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
