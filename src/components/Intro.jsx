import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Intro({ onOpenBooking }) {
  return (
    <section id="intro" className="relative py-20 sm:py-28 md:py-36 bg-ivory text-obsidian overflow-hidden select-none">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1D1B18_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center space-x-3 mb-6 sm:mb-8">
          <span className="w-6 sm:w-8 h-[1px] bg-muted-gold" />
          <span className="text-[9.5px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.38em] text-muted-gold font-sans font-semibold uppercase">
            THE ESSENCE OF HOTEL STARLINK
          </span>
        </div>

        {/* 2-Column Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Serif Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian leading-[1.15] sm:leading-[1.12] font-normal tracking-tight">
              A MODERN STAY, <br />
              <span className="italic text-muted-gold font-light">ROOTED IN JAIPUR.</span>
            </h2>
            
            <div className="mt-5 sm:mt-8 flex items-center space-x-3 sm:space-x-4 text-xs tracking-widest text-obsidian/70 font-sans uppercase">
              <MapPin className="w-4 h-4 text-muted-gold flex-shrink-0" />
              <span>{hotelInfo.locationShort}</span>
            </div>
          </div>

          {/* Right Column: Short Story & Gold Line Divider */}
          <div className="lg:col-span-5 flex flex-col justify-between pl-0 lg:pl-8 lg:border-l lg:border-muted-gold/30">
            <div>
              <p className="text-sm sm:text-base md:text-lg text-obsidian/85 font-sans font-light leading-relaxed">
                Hotel Starlink by The Nine Hotel offers a contemporary and comfortable base for discovering Jaipur, combining modern hospitality with a warm, welcoming atmosphere.
              </p>
              
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-obsidian/70 font-sans leading-relaxed">
                Whether you arrive for business, a weekend cultural getaway, or a memorable family holiday in Rajasthan, enjoy impeccably sanitized rooms, authentic culinary care, and effortless transit to Jaipur’s historic landmarks.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-obsidian/10">
              <a
                href="#rooms"
                data-cursor="explore"
                className="group inline-flex items-center space-x-3 text-xs font-semibold tracking-[0.2em] sm:tracking-[0.24em] text-obsidian uppercase hover:text-muted-gold transition-colors"
              >
                <span>DISCOVER HOTEL STARLINK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-muted-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Hospitality Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-obsidian/15">
          <div className="flex flex-col space-y-1.5 sm:space-y-2 p-3 sm:p-0">
            <Compass className="w-5 h-5 text-muted-gold mb-1" />
            <span className="font-serif text-lg text-obsidian font-medium">Strategic Location</span>
            <span className="text-xs text-obsidian/65 font-sans">Mansarovar hub near Metro & Airport</span>
          </div>

          <div className="flex flex-col space-y-1.5 sm:space-y-2 p-3 sm:p-0">
            <ShieldCheck className="w-5 h-5 text-muted-gold mb-1" />
            <span className="font-serif text-lg text-obsidian font-medium">Spotless Hygiene</span>
            <span className="text-xs text-obsidian/65 font-sans">Daily sanitized rooms & fresh linen</span>
          </div>

          <div className="flex flex-col space-y-1.5 sm:space-y-2 p-3 sm:p-0">
            <HeartHandshake className="w-5 h-5 text-muted-gold mb-1" />
            <span className="font-serif text-lg text-obsidian font-medium">The Nine Standard</span>
            <span className="text-xs text-obsidian/65 font-sans">Attentive 24/7 front desk care</span>
          </div>

          <div className="flex flex-col space-y-1.5 sm:space-y-2 p-3 sm:p-0">
            <span className="font-serif text-xl text-muted-gold font-bold">1:00 PM</span>
            <span className="font-serif text-lg text-obsidian font-medium">Seamless Check-in</span>
            <span className="text-xs text-obsidian/65 font-sans">Smooth check-in & flexible service</span>
          </div>
        </div>

      </div>
    </section>
  );
}
