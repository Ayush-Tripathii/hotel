import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Utensils, Sparkles, CheckCircle2, Coffee } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function DiningMenuModal({ isOpen, onClose, diningData }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-full max-w-3xl bg-charcoal border border-champagne/30 shadow-2xl p-6 sm:p-10 my-auto text-ivory max-h-[90vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-obsidian/80 hover:bg-champagne hover:text-obsidian text-ivory border border-champagne/30 transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center pb-8 border-b border-champagne/20">
            <span className="text-[10px] tracking-[0.4em] text-champagne uppercase font-sans">
              HOTEL STARLINK · DINING ATELIER
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-light tracking-wide mt-2">
              Curated Menu Selections
            </h3>
            <p className="mt-2 text-xs text-soft-beige/70 max-w-md mx-auto">
              Prepared fresh daily with locally sourced ingredients, aromatic spices, and traditional recipes.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="py-8 space-y-8">
            {diningData.sampleMenu.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-[1px] bg-champagne/50" />
                  <h4 className="font-serif text-xl text-champagne font-medium">
                    {cat.category}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 bg-obsidian/60 border border-charcoal hover:border-champagne/30 transition-colors flex items-center space-x-3"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-champagne/70 flex-shrink-0" />
                      <span className="text-xs text-soft-beige/90 font-sans tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="p-4 bg-obsidian/80 border border-charcoal text-center text-xs text-soft-beige/70 space-y-1">
            <p className="text-champagne font-serif text-sm">Room Service & Custom Dietary Requests Available</p>
            <p className="text-[11px]">Dial front desk extension from your room or contact concierge for special thali reservations.</p>
          </div>

          {/* Footer Close */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-champagne text-obsidian text-xs font-bold tracking-[0.2em] uppercase hover:bg-ivory transition-colors"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
