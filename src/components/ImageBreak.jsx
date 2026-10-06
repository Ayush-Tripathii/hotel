import React from 'react';
import { motion } from 'framer-motion';

export default function ImageBreak() {
  return (
    <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] min-h-[380px] sm:min-h-[460px] w-full overflow-hidden bg-obsidian flex items-center justify-center select-none">
      {/* Background Image with Fixed/Parallax Feeling */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/pause_atrium.jpg"
          alt="Hotel Starlink Tranquil Courtyard Experience"
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Deep Moody Overlays */}
        <div className="absolute inset-0 bg-obsidian/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      </div>

      {/* Large Translucent Serif Typography Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[9.5px] sm:text-[10px] md:text-xs tracking-[0.35em] sm:tracking-[0.45em] text-champagne uppercase font-sans mb-3 sm:mb-4 block"
        >
          QUIET LUXURY IN JAIPUR
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.06em] sm:tracking-[0.1em] text-ivory/90 font-light uppercase leading-tight sm:leading-none"
        >
          A PLACE TO PAUSE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-soft-beige/80 tracking-[0.15em] sm:tracking-[0.2em] font-sans uppercase max-w-md mx-auto"
        >
          Unwind in peaceful spaces crafted for deep calm after a day in the Pink City.
        </motion.p>
      </div>
    </section>
  );
}
