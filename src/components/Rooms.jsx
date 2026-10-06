import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bed, Users, Sparkles, ChevronRight } from 'lucide-react';
import { roomCategories } from '../data/hotelData';
import RoomModal from './RoomModal';

export default function Rooms({ onOpenBooking }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  const handleBookFromModal = (roomId) => {
    onOpenBooking({ roomId });
  };

  return (
    <section id="rooms" className="relative py-20 sm:py-28 md:py-36 bg-obsidian text-ivory overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-champagne/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-charcoal">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
              <span className="text-[9.5px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
                ACCOMMODATION & SUITES
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              YOUR PRIVATE RETREAT.
            </h2>
          </div>

          <p className="mt-3 md:mt-0 font-serif italic text-sm sm:text-base md:text-xl text-soft-beige/70 max-w-md">
            Designed for rest. Made for effortless stays in Jaipur.
          </p>
        </div>

        {/* Room Cards Grid (Editorial Asymmetry & Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {roomCategories.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-charcoal/50 border border-champagne/15 overflow-hidden flex flex-col justify-between hover:border-champagne/40 transition-all duration-500 shadow-xl"
            >
              {/* Image Container with Luxury Zoom Effect */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian cursor-pointer"
                onClick={() => handleOpenModal(room)}
                data-cursor="view"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Subtle Gradient & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-obsidian/85 backdrop-blur-md px-2.5 sm:px-3 py-1 border border-champagne/30 text-[8.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-champagne uppercase font-sans font-medium">
                  {room.category}
                </div>

                {/* Floating View Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-obsidian/85 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center text-ivory border border-champagne/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </div>

                {/* Price Pill if Available */}
                {room.basePriceINR && (
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-obsidian/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-champagne/30 text-right">
                    <span className="text-[7.5px] sm:text-[8px] text-soft-beige/70 uppercase tracking-widest block">From</span>
                    <span className="font-serif text-sm sm:text-base text-champagne font-semibold">₹{room.basePriceINR.toLocaleString('en-IN')}</span>
                    <span className="text-[8px] sm:text-[9px] text-soft-beige/60"> / night</span>
                  </div>
                )}
              </div>

              {/* Card Details & Typography */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-soft-beige/70 mb-2">
                    <span className="flex items-center gap-1.5 font-sans">
                      <Bed className="w-3.5 h-3.5 text-champagne" />
                      {room.bed}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5 font-sans">
                      <Users className="w-3.5 h-3.5 text-champagne" />
                      {room.maxOccupancy}
                    </span>
                  </div>

                  <h3
                    onClick={() => handleOpenModal(room)}
                    className="font-serif text-2xl sm:text-3xl text-ivory font-light tracking-wide group-hover:text-champagne transition-colors cursor-pointer"
                  >
                    {room.name}
                  </h3>

                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-soft-beige/75 font-sans leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Amenities Highlights Pills */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {room.highlights.slice(0, 4).map((h, i) => (
                      <span
                        key={i}
                        className="text-[9px] sm:text-[10px] tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-obsidian/70 border border-charcoal text-soft-beige/80"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-charcoal flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenModal(room)}
                    data-cursor="view"
                    className="text-xs tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-champagne uppercase hover:text-ivory transition-colors flex items-center space-x-1.5 group/btn"
                  >
                    <span>EXPLORE ROOM</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking({ roomId: room.id })}
                    data-cursor="book"
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-champagne/15 border border-champagne/50 text-champagne text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-300 whitespace-nowrap"
                  >
                    BOOK NOW
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Room Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onBookRoom={handleBookFromModal}
      />
    </section>
  );
}
