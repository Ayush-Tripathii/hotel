import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => {
      const handleMouseOver = (e) => {
        const target = e.target.closest('[data-cursor]');
        if (target) {
          const type = target.getAttribute('data-cursor');
          setCursorVariant(type || 'hover');
          if (type === 'view') setCursorText('VIEW');
          else if (type === 'book') setCursorText('BOOK');
          else if (type === 'explore') setCursorText('EXPLORE');
          else if (type === 'drag') setCursorText('DRAG');
          else setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      };

      window.addEventListener('mouseover', handleMouseOver);
      return () => window.removeEventListener('mouseover', handleMouseOver);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    const cleanupHover = handleElementHover();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (cleanupHover) cleanupHover();
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#F4F0E8',
      mixBlendMode: 'difference',
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(200, 169, 107, 0.25)',
      border: '1px solid #C8A96B',
      backdropFilter: 'blur(2px)',
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: '#C8A96B',
      color: '#0B0B0A',
    },
    book: {
      width: 80,
      height: 80,
      backgroundColor: '#F4F0E8',
      color: '#0B0B0A',
    },
    explore: {
      width: 76,
      height: 76,
      backgroundColor: '#C8A96B',
      color: '#0B0B0A',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-sans text-[10px] font-semibold tracking-widest uppercase transition-colors"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorVariant}
      variants={variants}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {cursorText && (
        <span className="select-none tracking-widest text-center px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
