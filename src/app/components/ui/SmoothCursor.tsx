'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface SpringConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}

interface SmoothCursorProps {
  cursor?: React.ReactElement;
  springConfig?: SpringConfig;
}

const defaultSpringConfig: SpringConfig = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001,
};

const DefaultCursorSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="rgba(139, 92, 246, 0.2)"
      stroke="rgba(139, 92, 246, 0.8)"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="rgba(139, 92, 246, 1)"
    />
  </svg>
);

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = defaultSpringConfig,
}: SmoothCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  
  // Motion values for position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring values for smooth animation
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Rotation based on movement
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { ...springConfig, stiffness: 200 });
  const springRotateY = useSpring(rotateY, { ...springConfig, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update position
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      // Calculate rotation based on movement direction
      const deltaX = clientX - springX.get();
      const deltaY = clientY - springY.get();
      
      rotateX.set(deltaY * 0.5);
      rotateY.set(deltaX * 0.5);
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select')
      );
      
      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      // Restore default cursor
      document.body.style.cursor = 'auto';
      
      // Remove event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, rotateX, rotateY, springX, springY]);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {cursor}
      </motion.div>
    </motion.div>
  );
}
