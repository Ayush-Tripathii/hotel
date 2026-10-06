import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Car, 
  Clock, 
  Utensils, 
  Coffee, 
  Wind, 
  Sparkles, 
  Zap, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { hotelAmenities } from '../data/hotelData';

const iconMap = {
  Wifi: Wifi,
  Car: Car,
  Clock: Clock,
  Utensils: Utensils,
  Coffee: Coffee,
  Wind: Wind,
  Sparkles: Sparkles,
  Zap: Zap,
  MapPin: MapPin,
};

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-20 sm:py-28 md:py-36 bg-charcoal text-ivory overflow-hidden select-none">
      
      {/* Background Subtle Luxury Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
            <span className="text-[9.5px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
              COMFORTS & SERVICES
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
            MORE THAN A ROOM.
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-soft-beige/75 font-sans font-light max-w-xl mx-auto leading-relaxed px-2">
            Thoughtfully curated amenities and attentive hospitality ensuring an effortless stay for work, family, and leisure.
          </p>
        </div>

        {/* 3x3 Luxury Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {hotelAmenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon] || CheckCircle2;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-6 sm:p-8 bg-obsidian/70 border border-champagne/15 hover:border-champagne/40 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Line Icon Container */}
                  <div className="w-10 sm:w-12 h-10 sm:h-12 mb-5 sm:mb-6 flex items-center justify-center bg-charcoal/80 border border-champagne/20 text-champagne group-hover:bg-champagne group-hover:text-obsidian transition-colors duration-400">
                    <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-ivory font-normal tracking-wide group-hover:text-champagne transition-colors">
                    {amenity.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-3 text-xs md:text-sm text-soft-beige/70 font-sans leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-charcoal/80 flex items-center justify-between text-[8.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-champagne/60 uppercase font-sans">
                  <span>INCLUDED IN STAY</span>
                  <span className="w-4 h-[1px] bg-champagne/30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quiet Luxury Note */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-widest text-soft-beige/50 uppercase font-sans">
            Dedicated 24-Hour Concierge · Daily Sanitization Protocols · Personalized Assistance
          </p>
        </div>

      </div>
    </section>
  );
}
