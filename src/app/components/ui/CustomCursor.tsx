'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CustomCursorDesign = () => (
  <div className="relative">
    {/* Outer ring */}
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        width: '32px',
        height: '32px',
        border: '2px solid rgba(139, 92, 246, 0.5)',
        backgroundColor: 'transparent',
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    
    {/* Inner dot */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'rgba(139, 92, 246, 1)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
      }}
    />
    
    {/* Trailing effect */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: '4px',
        height: '4px',
        backgroundColor: 'rgba(96, 165, 250, 0.8)',
      }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  </div>
);
