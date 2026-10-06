import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink, Clock, Car, Train, Plane } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function LocationMap() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Hotel Starlink By The Nine Hotel Mansarovar Jaipur"
  )}`;

  return (
    <section id="location" className="relative py-20 sm:py-28 md:py-36 bg-charcoal text-ivory overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
            <span className="text-[9.5px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
              NEIGHBOURHOOD & TRANSIT
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
            MANSAROVAR · JAIPUR
          </h2>

          <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-champagne uppercase font-sans">
            RAJASTHAN · INDIA
          </p>
        </div>

        {/* 2-Column Location & Stylized Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Address & Proximity Breakdown */}
          <div className="lg:col-span-5 bg-obsidian p-6 sm:p-8 md:p-10 border border-champagne/20 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-5 sm:space-y-6">
              <div>
                <span className="text-[8.5px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase font-sans block mb-2">
                  OFFICIAL ADDRESS
                </span>
                <p className="font-serif text-base sm:text-lg md:text-xl text-ivory leading-snug">
                  {hotelInfo.fullAddress}
                </p>
              </div>

              {/* Distances List */}
              <div className="pt-5 sm:pt-6 border-t border-charcoal space-y-3.5 sm:space-y-4">
                <span className="text-[9.5px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-soft-beige/60 uppercase font-sans block">
                  KEY TRANSIT PROXIMITIES
                </span>

                <div className="space-y-2.5 sm:space-y-3">
                  {hotelInfo.nearbyDistances.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs text-soft-beige/85 py-1 sm:py-1.5 border-b border-charcoal/60 gap-2">
                      <span className="flex items-center gap-2 truncate">
                        <MapPin className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                        <span className="truncate">{item.place}</span>
                      </span>
                      <div className="flex items-center space-x-1.5 sm:space-x-2 text-champagne font-sans font-medium flex-shrink-0">
                        <span>{item.distance}</span>
                        <span className="text-soft-beige/40">·</span>
                        <span className="text-[10px] sm:text-[11px] text-soft-beige/70 font-light">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps External Trigger */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-charcoal">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="explore"
                className="w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-champagne text-obsidian text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:bg-ivory transition-colors flex items-center justify-center space-x-2"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Luxury Architectural Map Visual */}
          <div className="lg:col-span-7 bg-obsidian border border-champagne/20 relative overflow-hidden flex flex-col items-center justify-center min-h-[340px] sm:min-h-[440px] shadow-2xl p-4 sm:p-6">
            
            {/* Dark Styled Map Canvas Graphic */}
            <div className="absolute inset-0 bg-[#0F0F0D] opacity-90">
              {/* Stylized Grid & Arterial Road Vectors */}
              <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8A96B" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
                {/* Arterial Curves */}
                <path d="M -100 200 C 150 180, 300 350, 800 280" fill="none" stroke="#C8A96B" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 200 -50 C 240 250, 450 300, 500 600" fill="none" stroke="#F4F0E8" strokeWidth="1.5" />
                <path d="M 50 500 C 350 450, 550 150, 750 50" fill="none" stroke="#9E8350" strokeWidth="1" />
              </svg>
            </div>

            {/* Stylized Landmark Radar Rings */}
            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 border border-champagne/15 rounded-full animate-pulse pointer-events-none" />
            <div className="absolute w-36 sm:w-48 h-36 sm:h-48 border border-champagne/25 rounded-full pointer-events-none" />

            {/* Central Pin: Hotel Starlink */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-20 flex flex-col items-center text-center p-4 sm:p-6 bg-charcoal/90 backdrop-blur-md border border-champagne shadow-2xl max-w-[280px] sm:max-w-sm"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-champagne text-obsidian flex items-center justify-center mb-2.5 sm:mb-3 shadow-[0_0_20px_rgba(200,169,107,0.6)]">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
              </div>

              <span className="font-serif text-lg sm:text-xl text-ivory font-light uppercase tracking-wider">
                HOTEL STARLINK
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase font-sans mt-0.5">
                BY THE NINE HOTEL
              </span>

              <p className="mt-2 text-[11px] sm:text-xs text-soft-beige/80 font-sans">
                Ganpatpura, Mangyawas, Mansarovar
              </p>

              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-charcoal/80 w-full flex justify-around text-[9px] sm:text-[10px] text-soft-beige/70">
                <span>Airport: 12 km</span>
                <span>•</span>
                <span>Metro: 2.5 km</span>
                <span>•</span>
                <span>Old City: 11 km</span>
              </div>
            </motion.div>

            {/* Corner Navigation Compass */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 flex items-center space-x-1.5 sm:space-x-2 text-[8.5px] sm:text-[10px] tracking-widest text-champagne/50 uppercase font-sans">
              <Compass className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-champagne" />
              <span>26.8529° N, 75.7617° E</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
