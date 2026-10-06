import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function StickyMobileBooking({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-obsidian/95 backdrop-blur-xl border-t border-champagne/25 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {/* Call Concierge */}
        <a
          href={`tel:${hotelInfo.phone}`}
          className="p-3 bg-charcoal border border-champagne/30 text-champagne hover:bg-champagne hover:text-obsidian transition-colors flex items-center justify-center flex-shrink-0"
          aria-label="Call Hotel Concierge"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* WhatsApp Assist */}
        <a
          href={`https://wa.me/${hotelInfo.whatsapp}?text=${encodeURIComponent(
            "Hello Hotel Starlink Jaipur, I would like to inquire about room booking."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-charcoal border border-champagne/30 text-champagne hover:bg-champagne hover:text-obsidian transition-colors flex items-center justify-center flex-shrink-0"
          aria-label="WhatsApp Hotel"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Primary Booking Button */}
        <button
          onClick={() => onOpenBooking()}
          className="flex-grow py-3 px-3 sm:px-4 bg-champagne text-obsidian text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:bg-ivory transition-colors flex items-center justify-center space-x-2 shadow-lg whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>BOOK YOUR STAY</span>
        </button>
      </div>
    </div>
  );
}
