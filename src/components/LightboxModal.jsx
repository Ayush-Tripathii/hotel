import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function LightboxModal({ images, currentIndex, isOpen, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 select-none">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between z-20 pb-4 border-b border-charcoal/60">
          <div className="flex items-center space-x-3">
            <Camera className="w-4 h-4 text-champagne" />
            <span className="text-[10px] tracking-[0.3em] text-champagne uppercase font-sans">
              HOTEL STARLINK ARCHIVE
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-xs tracking-widest text-soft-beige/70 font-sans">
              {currentIndex + 1} / {images.length}
            </span>

            <button
              onClick={onClose}
              data-cursor="explore"
              className="p-2 bg-charcoal text-ivory hover:bg-champagne hover:text-obsidian transition-colors rounded-full border border-champagne/30"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Image & Navigation Buttons */}
        <div className="relative flex-grow flex items-center justify-center p-2 sm:p-6 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            data-cursor="explore"
            className="absolute left-2 md:left-6 z-30 p-3 bg-charcoal/80 hover:bg-champagne hover:text-obsidian text-ivory transition-colors rounded-full border border-champagne/20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            key={currentItem.id || currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[75vh] max-w-5xl flex flex-col items-center"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[70vh] w-auto max-w-full object-contain shadow-2xl border border-champagne/20"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            data-cursor="explore"
            className="absolute right-2 md:right-6 z-30 p-3 bg-charcoal/80 hover:bg-champagne hover:text-obsidian text-ivory transition-colors rounded-full border border-champagne/20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="text-center pt-4 border-t border-charcoal/60 z-20">
          <span className="text-[9px] tracking-[0.3em] text-champagne uppercase font-sans block mb-1">
            {currentItem.category}
          </span>
          <h4 className="font-serif text-xl text-ivory font-light">
            {currentItem.title}
          </h4>
        </div>

      </div>
    </AnimatePresence>
  );
}
