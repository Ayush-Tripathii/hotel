import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function BookingCTA({ onOpenBooking }) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] py-20 sm:py-28 md:py-36 w-full overflow-hidden bg-obsidian flex items-center justify-center select-none">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/room_luxury_cityview.jpg"
          alt="Hotel Starlink Luxury Stay Perspective"
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Dark Mood Gradient */}
        <div className="absolute inset-0 bg-obsidian/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/80" />
      </div>

      {/* Center Action Composition */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-2.5 sm:space-x-3 mb-4 sm:mb-6"
        >
          <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
          <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.35em] sm:tracking-[0.45em] text-champagne uppercase font-sans font-semibold">
            YOUR BESPOKE JAIPUR SOJOURN
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-soft-beige/90 tracking-[0.12em] sm:tracking-[0.15em] uppercase font-light"
        >
          READY TO STAY?
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-2.5 sm:mt-3 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory font-light uppercase tracking-tight leading-tight"
        >
          MAKE HOTEL STARLINK <br />
          <span className="italic text-champagne font-normal">YOUR NEXT JAIPUR ADDRESS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-soft-beige/80 tracking-[0.15em] sm:tracking-[0.2em] font-sans uppercase max-w-xl mx-auto px-2"
        >
          Experience quiet luxury, pristine rooms, and authentic hospitality in Mansarovar.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6"
        >
          <button
            onClick={() => onOpenBooking()}
            data-cursor="book"
            className="w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 bg-champagne text-obsidian text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase hover:bg-ivory hover:shadow-[0_0_35px_rgba(200,169,107,0.5)] transition-all flex items-center justify-center space-x-3 group"
          >
            <span>BOOK YOUR STAY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => onOpenBooking()}
            data-cursor="explore"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-champagne/40 text-ivory text-[11px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.24em] uppercase hover:bg-champagne/10 hover:border-champagne transition-all"
          >
            CHECK AVAILABILITY
          </button>
        </motion.div>

        {/* Contact Assist Note */}
        <div className="mt-8 text-center">
          <a
            href={`tel:${hotelInfo.phone}`}
            className="inline-flex items-center space-x-2 text-xs text-soft-beige/60 hover:text-champagne transition-colors font-sans tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-champagne" />
            <span>Need immediate reservation assistance? Call {hotelInfo.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
