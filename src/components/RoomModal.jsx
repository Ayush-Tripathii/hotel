import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Bed, Users, Maximize2, ShieldCheck, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function RoomModal({ room, isOpen, onClose, onBookRoom }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl bg-charcoal border border-champagne/25 shadow-2xl overflow-hidden my-auto text-ivory max-h-[92vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 p-2 bg-obsidian/85 hover:bg-champagne hover:text-obsidian text-ivory border border-champagne/30 transition-colors rounded-full shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          {/* Modal Header & Content */}
          <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            
            {/* Image Gallery Showcase */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian border border-champagne/15">
                <img
                  src={room.gallery ? room.gallery[activeImageIndex] : room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-obsidian/80 px-2.5 sm:px-3 py-1 border border-champagne/30 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-champagne uppercase font-sans">
                  {room.category}
                </div>
              </div>

              {/* Thumbnail strip */}
              {room.gallery && room.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {room.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 sm:w-20 h-11 sm:h-14 flex-shrink-0 overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? 'border-champagne opacity-100 scale-105'
                          : 'border-charcoal opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-light tracking-wide">
                  {room.name}
                </h3>
                {room.basePriceINR && (
                  <div className="sm:text-right">
                    <span className="text-[9px] sm:text-[10px] tracking-widest text-soft-beige/70 uppercase block">Starting from</span>
                    <span className="font-serif text-xl sm:text-2xl text-champagne font-semibold">₹{room.basePriceINR.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] sm:text-[11px] text-soft-beige/60"> / night + taxes</span>
                  </div>
                )}
              </div>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-champagne italic font-serif">
                "{room.tagline}"
              </p>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 bg-obsidian/60 border border-charcoal text-xs">
              <div className="flex items-center space-x-2.5">
                <Bed className="w-4 h-4 text-champagne flex-shrink-0" />
                <div>
                  <span className="text-soft-beige/60 block text-[9px] uppercase tracking-wider">Bed Type</span>
                  <span className="font-medium">{room.bed}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Users className="w-4 h-4 text-champagne flex-shrink-0" />
                <div>
                  <span className="text-soft-beige/60 block text-[9px] uppercase tracking-wider">Occupancy</span>
                  <span className="font-medium">{room.maxOccupancy}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Maximize2 className="w-4 h-4 text-champagne flex-shrink-0" />
                <div>
                  <span className="text-soft-beige/60 block text-[9px] uppercase tracking-wider">Room Area</span>
                  <span className="font-medium">{room.size}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-champagne font-sans font-semibold">
                Overview & Design
              </h4>
              <p className="text-xs sm:text-sm text-soft-beige/85 font-sans leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Full Amenities List */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-champagne font-sans font-semibold">
                Room Amenities & Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {room.amenities.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-2.5 text-xs text-soft-beige/90">
                    <Check className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospitality Policies Note */}
            <div className="p-3.5 sm:p-4 bg-obsidian/80 border border-charcoal/80 text-[10.5px] sm:text-[11px] text-soft-beige/70 space-y-1">
              <div className="flex items-center space-x-1.5 text-champagne font-medium uppercase tracking-wider text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Stay Standards</span>
              </div>
              <p>Check-in from {hotelInfo.checkInTime} · Check-out until {hotelInfo.checkOutTime}. Government photo ID required at arrival.</p>
            </div>

          </div>

          {/* Modal Footer / Action CTA */}
          <div className="p-4 sm:p-6 bg-obsidian border-t border-charcoal flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mt-auto">
            <div>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-soft-beige/60 uppercase block">Selected Sanctuary</span>
              <span className="font-serif text-base sm:text-lg text-ivory">{room.name}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              data-cursor="book"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-champagne text-obsidian text-xs font-bold tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-ivory hover:shadow-[0_0_25px_rgba(200,169,107,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <span>RESERVE THIS ROOM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
