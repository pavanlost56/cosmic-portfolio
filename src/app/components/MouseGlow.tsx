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
      {/* Primary glow - larger, softer */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 0.6 : 0,
        }}
      >
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 150,
            mass: 0.8,
          }}
          style={{
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Secondary medium glow with color shift */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 0.8 : 0,
        }}
      >
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 250,
            mass: 0.3,
          }}
          style={{
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 75%)`,
            filter: 'blur(30px)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Inner bright spot */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          opacity: isMouseInside ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute w-[150px] h-[150px] rounded-full"
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 400,
            mass: 0.1,
          }}
          style={{
            background: `radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, rgba(167, 139, 250, 0.15) 30%, transparent 65%)`,
            filter: 'blur(15px)',
          }}
        />
      </motion.div>
      
      {/* Sparkle effect on movement */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30"
        animate={{
          opacity: isMouseInside ? 0.6 : 0,
        }}
      >
        <motion.div
          className="absolute w-[30px] h-[30px]"
          animate={{
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
            scale: [1, 1.5, 1],
          }}
          transition={{
            x: { type: "spring", damping: 10, stiffness: 600, mass: 0.05 },
            y: { type: "spring", damping: 10, stiffness: 600, mass: 0.05 },
            scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            background: `radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)`,
            filter: 'blur(5px)',
            borderRadius: '50%',
          }}
        />
      </motion.div>
    </>
  );
}
