'use client';

import { useEffect, useState } from 'react';
import { SmoothCursor } from './SmoothCursor';

export default function CursorWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check if device has fine pointer (mouse) and is not touch-primary
      const hasMouseSupport = window.matchMedia('(pointer: fine)').matches;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsDesktop(hasMouseSupport && !isTouchDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (!isDesktop) return null;

  return <SmoothCursor />;
}
