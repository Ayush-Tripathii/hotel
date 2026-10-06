import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowUpRight, Grid } from 'lucide-react';
import { galleryItems } from '../data/hotelData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = ['All', 'Suites', 'Dining', 'Architecture', 'Jaipur'];

  const filteredImages = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((img) => img.category.toLowerCase() === activeCategory.toLowerCase());

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-obsidian text-ivory overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-charcoal">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[1px] bg-champagne" />
              <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
                VISUAL ARCHIVE
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              EDITORIAL GALLERY.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-champagne text-obsidian font-bold shadow-[0_0_15px_rgba(200,169,107,0.3)]'
                    : 'bg-charcoal text-soft-beige/70 hover:text-ivory hover:bg-charcoal/80 border border-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry / Varied Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              onClick={() => handleOpenLightbox(index)}
              data-cursor="view"
              className="group relative overflow-hidden bg-charcoal border border-champagne/15 cursor-pointer break-inside-avoid shadow-xl hover:border-champagne/50 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-106 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-[9px] tracking-[0.3em] text-champagne uppercase font-sans">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-ivory font-light mt-1">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center space-x-2 text-[10px] tracking-widest text-soft-beige/70 uppercase">
                  <span>EXPAND VIEW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
