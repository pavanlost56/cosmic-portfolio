'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FluidCursorDesign = () => (
  <div className="relative w-10 h-10">
    {/* Liquid blob effect */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Main fluid shape */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #e879f9 0%, #a855f7 25%, #7c3aed 50%, #6366f1 75%, #3b82f6 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)',
          }}
        />
      </motion.div>
      
      {/* Inner glow core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-4 h-4"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(199, 210, 254, 0.7) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(2px)',
          }}
        />
      </motion.div>
      
      {/* Floating bubbles */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
          }}
          animate={{
            x: [
              Math.random() * 20 - 10,
              Math.random() * 30 - 15,
              Math.random() * 20 - 10,
            ],
            y: [
              Math.random() * 20 - 10,
              Math.random() * 30 - 15,
              Math.random() * 20 - 10,
            ],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.7,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${4 + index * 2}px`,
              height: `${4 + index * 2}px`,
              background: `radial-gradient(circle, ${
                ['#f0abfc', '#c4b5fd', '#93c5fd'][index]
              } 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.8],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        style={{
          border: '1px solid rgba(168, 85, 247, 0.4)',
        }}
      />
    </motion.div>
  </div>
);
