'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CustomCursorDesign = () => (
  <div className="relative w-12 h-12">
    {/* Minimalist geometric design */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Outer hexagon frame */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 48 48"
        fill="none"
      >
        <motion.path
          d="M24 4 L40 14 L40 34 L24 44 L8 34 L8 14 Z"
          stroke="url(#hexGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.3, 0.7, 1],
          }}
        />
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Central dot with morphing shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 0.8, 1.2, 1],
          borderRadius: ['50%', '30%', '50%', '50%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-3 h-3"
          style={{
            background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)',
            boxShadow: '0 0 20px rgba(129, 140, 248, 0.6), 0 0 40px rgba(129, 140, 248, 0.3)',
          }}
        />
      </motion.div>
      
      {/* Rotating crosses */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[0, 90, 180, 270].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-full h-0.5"
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              transformOrigin: 'center',
            }}
            animate={{
              scaleX: [0.3, 0.7, 0.3],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, rgba(${129 + index * 10}, ${140 - index * 10}, 248, 0.8) 50%, transparent 100%)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Corner dots */}
      {[45, 135, 225, 315].map((angle, index) => (
        <motion.div
          key={angle}
          className="absolute top-1/2 left-1/2"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-20px)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.25,
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: index % 2 === 0 ? '#c084fc' : '#60a5fa',
              boxShadow: `0 0 8px ${index % 2 === 0 ? '#c084fc' : '#60a5fa'}`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);
