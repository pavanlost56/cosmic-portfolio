'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Primary glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
          style={{
            background: `radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.1) 25%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Secondary smaller, brighter glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            mass: 0.2,
          }}
          style={{
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Cursor trail effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 0.5 : 0,
        }}
      >
        <motion.div
          className="absolute w-[100px] h-[100px] rounded-full"
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 400,
            mass: 0.1,
          }}
          style={{
            background: `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 60%)`,
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </>
  );
}
