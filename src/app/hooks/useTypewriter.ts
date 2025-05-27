'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(
  text: string,
  speed: number = 100,
  delay: number = 0
) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        let index = 0;
        const timer = setInterval(() => {
          if (index <= text.length) {
            setDisplayText(text.slice(0, index));
            index++;
          } else {
            setIsComplete(true);
            clearInterval(timer);
          }
        }, speed);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(delayTimeout);
    } else {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
