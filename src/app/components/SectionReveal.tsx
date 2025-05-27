'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  staggerChildren?: boolean;
}

export default function SectionReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  staggerChildren = false
}: SectionRevealProps) {  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.1
  });
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40, scale: 0.98 };
      case 'down':
        return { opacity: 0, y: -40, scale: 0.98 };
      case 'left':
        return { opacity: 0, x: -40, scale: 0.98 };
      case 'right':
        return { opacity: 0, x: 40, scale: 0.98 };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'rotate':
        return { opacity: 0, rotateY: -15, scale: 0.95 };
      default:
        return { opacity: 0, y: 40, scale: 0.98 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0, scale: 1 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0, scale: 1 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'rotate':
        return { opacity: 1, rotateY: 0, scale: 1 };
      default:
        return { opacity: 1, y: 0, scale: 1 };
    }
  };
  const containerVariants = {
    hidden: getInitialState(),
    visible: {
      ...getAnimateState(),
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: staggerChildren ? 0.15 : 0
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerChildren ? containerVariants : undefined}
      style={{ transformStyle: 'preserve-3d' }}      {...(!staggerChildren && {
        initial: getInitialState(),
        animate: isInView ? getAnimateState() : getInitialState(),
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      })}
    >
      {staggerChildren ? (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

// Specialized component for text reveals
export function TextReveal({ 
  children, 
  className = '',
  delay = 0,
  splitBy = 'word' // 'word', 'char', 'line'
}: {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'char' | 'line';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const text = children;
  let splitText: string[] = [];

  switch (splitBy) {
    case 'word':
      splitText = text.split(' ');
      break;
    case 'char':
      splitText = text.split('');
      break;
    case 'line':
      splitText = text.split('\n');
      break;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === 'char' ? 0.02 : 0.08,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} overflow-hidden`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          className={`inline-block ${splitBy === 'char' ? '' : 'mr-1'}`}
          variants={itemVariants}
          style={{ transformOrigin: 'bottom center' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {splitBy === 'line' && index < splitText.length - 1 && <br />}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Specialized component for image reveals
export function ImageReveal({ 
  src, 
  alt, 
  className = '',
  delay = 0 
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2, filter: "blur(10px)" }}
        animate={isInView ? { scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, delay: delay + 0.2 }}
      />
      
      {/* Reveal overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{ 
          duration: 1,
          delay: delay + 0.5,
          ease: [0.77, 0, 0.175, 1]
        }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
