import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-obsidian flex flex-col items-center justify-center select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="font-serif text-2xl md:text-3xl tracking-[0.35em] text-ivory font-light uppercase">
              HOTEL STARLINK
            </div>
            <div className="text-[9px] md:text-[10px] tracking-[0.45em] text-champagne uppercase font-sans mt-1">
              BY THE NINE HOTEL
            </div>

            <div className="w-36 md:w-44 h-[1px] bg-charcoal mx-auto mt-6 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-champagne"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="text-[9px] tracking-[0.4em] text-soft-beige/50 font-sans uppercase mt-4">
              JAIPUR · RAJASTHAN
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
