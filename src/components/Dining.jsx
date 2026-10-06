import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Sparkles, Coffee, ChefHat } from 'lucide-react';
import { diningHighlights } from '../data/hotelData';
import DiningMenuModal from './DiningMenuModal';

export default function Dining() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <section id="dining" className="relative py-20 sm:py-28 md:py-36 bg-obsidian text-ivory overflow-hidden select-none">
      
      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-champagne/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Photography Collage */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Dining Photography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal border border-champagne/20 shadow-2xl"
              data-cursor="view"
            >
              <img
                src={diningHighlights.imageMain}
                alt="Fine Dining Ambiance at Hotel Starlink"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
            </motion.div>

            {/* Secondary Overlapping Plate Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -bottom-6 sm:-bottom-10 -right-4 sm:-right-8 w-44 sm:w-60 lg:w-64 aspect-square overflow-hidden bg-charcoal border-2 border-champagne/30 shadow-2xl z-20"
              data-cursor="view"
            >
              <img
                src={diningHighlights.imageSecondary}
                alt="Rajasthani Gourmet Culinary Specialty"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

          </div>

          {/* Right Column: Editorial Copy & Dining Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-6">
            
            {/* Gold Badge */}
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
              <span className="text-[9.5px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
                CULINARY ARTISTRY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight leading-tight">
              SAVOUR THE <br />
              <span className="italic text-champagne font-light">MOMENT.</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-soft-beige/85 font-sans font-light leading-relaxed">
              {diningHighlights.description}
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-charcoal">
              {diningHighlights.features.map((f, i) => (
                <div key={i} className="flex flex-col space-y-1 sm:space-y-1.5">
                  <span className="font-serif text-sm sm:text-base text-champagne font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {f.title}
                  </span>
                  <span className="text-xs text-soft-beige/70 font-sans leading-relaxed">
                    {f.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                onClick={() => setMenuModalOpen(true)}
                data-cursor="explore"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-champagne text-obsidian text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase hover:bg-ivory transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>DISCOVER DINING MENU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] sm:text-xs tracking-widest text-soft-beige/60 uppercase font-sans">
                Pure Vegetarian & Multi-Cuisine
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Menu Preview Modal */}
      <DiningMenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        diningData={diningHighlights}
      />
    </section>
  );
}
