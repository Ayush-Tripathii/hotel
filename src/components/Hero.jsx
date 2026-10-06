import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Users, BedDouble, ChevronRight } from 'lucide-react';
import { hotelInfo, roomCategories } from '../data/hotelData';

export default function Hero({ onOpenBooking, onSelectRoom }) {
  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split('T')[0]
  );
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [checkOut, setCheckOut] = useState(
    tomorrow.toISOString().split('T')[0]
  );
  const [selectedCategory, setSelectedCategory] = useState(roomCategories[0].id);
  const [guests, setGuests] = useState('2');

  const handleBookingSearch = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn, checkOut, roomId: selectedCategory, guests });
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-obsidian select-none">
      
      {/* Background Photography with Slow Ken Burns Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./images/hero_exterior.jpg"
          alt="Hotel Starlink by The Nine Hotel Exterior"
          className="w-full h-full object-cover object-center scale-105 animate-ken-burns will-change-transform"
          loading="eager"
        />
        {/* Dark Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />
      </div>

      {/* Hero Content (Centered Editorial Composition) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-auto mb-auto pt-28 sm:pt-32 pb-8 sm:pb-12 flex flex-col items-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4"
        >
          <span className="w-6 sm:w-8 h-[1px] bg-champagne/80" />
          <span className="text-[9.5px] sm:text-[11px] md:text-xs tracking-[0.3em] sm:tracking-[0.38em] text-champagne uppercase font-sans font-medium">
            WELCOME TO JAIPUR
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-champagne/80" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.04em] sm:tracking-[0.06em] text-ivory font-light leading-[1.12] sm:leading-[1.08] max-w-4xl"
        >
          STAY BEYOND <br />
          <span className="italic font-normal text-champagne">ORDINARY.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-soft-beige/85 font-sans font-light max-w-xl tracking-wide leading-relaxed px-2"
        >
          A refined urban retreat by The Nine Hotel — where timeless Rajasthani warmth meets serene contemporary comfort in Mansarovar.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenBooking()}
            data-cursor="book"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-champagne text-obsidian text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-all duration-300 hover:bg-ivory hover:shadow-[0_0_30px_rgba(200,169,107,0.35)] flex items-center justify-center space-x-2.5 sm:space-x-3 group"
          >
            <span>BOOK YOUR STAY</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#intro"
            data-cursor="explore"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-ivory/30 text-ivory text-[11px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-all duration-300 hover:border-champagne hover:text-champagne hover:bg-white/5 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE THE HOTEL</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Fast Booking Ribbon (Desktop / Tablet) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-5xl w-full mx-auto px-6 mb-6 hidden md:block"
      >
        <form
          onSubmit={handleBookingSearch}
          className="bg-obsidian/85 backdrop-blur-xl border border-champagne/25 p-4 grid grid-cols-4 gap-4 shadow-2xl items-center"
        >
          {/* Check-in */}
          <div className="flex flex-col border-r border-charcoal/80 pr-3">
            <span className="text-[9px] tracking-[0.25em] text-champagne uppercase font-sans flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> Check-in
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-ivory text-xs font-sans tracking-wider mt-1 focus:outline-none focus:text-champagne cursor-pointer"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col border-r border-charcoal/80 pr-3">
            <span className="text-[9px] tracking-[0.25em] text-champagne uppercase font-sans flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> Check-out
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-ivory text-xs font-sans tracking-wider mt-1 focus:outline-none focus:text-champagne cursor-pointer"
            />
          </div>

          {/* Room Selection */}
          <div className="flex flex-col border-r border-charcoal/80 pr-3">
            <span className="text-[9px] tracking-[0.25em] text-champagne uppercase font-sans flex items-center gap-1.5">
              <BedDouble className="w-3 h-3" /> Room Choice
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-ivory text-xs font-sans tracking-wider mt-1 focus:outline-none focus:text-champagne cursor-pointer"
            >
              {roomCategories.map((r) => (
                <option key={r.id} value={r.id} className="bg-charcoal text-ivory">
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Search */}
          <button
            type="submit"
            data-cursor="book"
            className="h-full py-3 px-4 bg-champagne text-obsidian text-xs font-bold tracking-[0.22em] uppercase hover:bg-ivory hover:text-obsidian transition-colors flex items-center justify-center space-x-2"
          >
            <span>AVAILABILITY</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </motion.div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        aria-label="Scroll Down"
        className="relative z-10 mx-auto mb-3 text-soft-beige/50 hover:text-champagne transition-colors flex flex-col items-center animate-bounce md:hidden"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
