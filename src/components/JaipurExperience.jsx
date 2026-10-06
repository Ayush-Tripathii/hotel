import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { jaipurStories } from '../data/hotelData';

export default function JaipurExperience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 md:py-36 bg-obsidian text-ivory overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-charcoal">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
              <span className="text-[9.5px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
                DISCOVER THE PINK CITY
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              YOUR JAIPUR, YOUR WAY.
            </h2>
          </div>

          <p className="mt-3 md:mt-0 font-sans text-xs sm:text-sm md:text-base text-soft-beige/75 max-w-md font-light leading-relaxed">
            Ideally positioned in Mansarovar, Hotel Starlink offers a comfortable base from which to experience the colour, culture, and energy of Jaipur.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {jaipurStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[380px] sm:h-[420px] md:h-[460px] overflow-hidden border border-champagne/15 bg-charcoal flex flex-col justify-end p-5 sm:p-6 hover:border-champagne/50 transition-all duration-500 shadow-xl"
              data-cursor="explore"
            >
              {/* Full Background Image */}
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent group-hover:from-obsidian/95 transition-all duration-500" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[9px] tracking-[0.25em] text-champagne uppercase font-sans px-2.5 py-1 bg-obsidian/80 backdrop-blur-md border border-champagne/30">
                  {story.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-obsidian/80 backdrop-blur-md border border-champagne/30 flex items-center justify-center text-champagne transform group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content with Upward Slide on Hover */}
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-[10px] tracking-widest text-champagne/80 uppercase font-sans block mb-1">
                  {story.distance}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-ivory font-light group-hover:text-champagne transition-colors leading-tight">
                  {story.title}
                </h3>

                <p className="mt-2 text-xs text-soft-beige/80 font-sans leading-relaxed line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  {story.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
