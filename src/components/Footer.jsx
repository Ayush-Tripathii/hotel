import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-obsidian text-ivory border-t border-champagne/15 pt-16 sm:pt-20 pb-10 sm:pb-12 select-none">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-charcoal">
          
          {/* Brand Column (5 Cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-ivory font-light uppercase">
                HOTEL STARLINK
              </span>
              <span className="text-[8.5px] sm:text-[9px] md:text-[10px] tracking-[0.35em] sm:tracking-[0.45em] text-champagne uppercase font-sans mt-0.5 font-medium">
                BY THE NINE HOTEL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-soft-beige/75 font-sans font-light leading-relaxed max-w-sm">
              A refined urban stay in Mansarovar, Jaipur. Combining modern architectural design, quiet comfort, and authentic Rajasthani hospitality.
            </p>

            <div className="space-y-2 pt-2 text-xs text-soft-beige/70 font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                <span>{hotelInfo.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <a href={`tel:${hotelInfo.phone}`} className="hover:text-champagne transition-colors">
                  {hotelInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-champagne transition-colors">
                  {hotelInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: EXPLORE (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <span className="text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase font-sans font-semibold block">
              EXPLORE
            </span>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-soft-beige/80 font-sans">
              <li><a href="#rooms" className="hover:text-champagne transition-colors">Suites & Rooms</a></li>
              <li><a href="#dining" className="hover:text-champagne transition-colors">Dining Atelier</a></li>
              <li><a href="#experience" className="hover:text-champagne transition-colors">Jaipur Experience</a></li>
              <li><a href="#gallery" className="hover:text-champagne transition-colors">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: HOTEL (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <span className="text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase font-sans font-semibold block">
              HOTEL
            </span>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-soft-beige/80 font-sans">
              <li><a href="#intro" className="hover:text-champagne transition-colors">About Property</a></li>
              <li><a href="#amenities" className="hover:text-champagne transition-colors">Guest Amenities</a></li>
              <li><a href="#location" className="hover:text-champagne transition-colors">Location & Transit</a></li>
              <li><a href="#contact" className="hover:text-champagne transition-colors">Concierge & Contact</a></li>
            </ul>
          </div>

          {/* Column 4: BOOK & CONNECT (3 Cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <span className="text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase font-sans font-semibold block">
              RESERVATIONS & SOCIAL
            </span>

            <div className="space-y-2.5 sm:space-y-3">
              <button
                onClick={() => onOpenBooking()}
                data-cursor="book"
                className="w-full py-2.5 px-4 bg-champagne text-obsidian text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:bg-ivory transition-colors"
              >
                BOOK YOUR STAY
              </button>

              <a
                href={hotelInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="explore"
                className="w-full py-2.5 px-4 bg-charcoal border border-champagne/30 text-ivory text-[10.5px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase hover:border-champagne hover:text-champagne transition-colors flex items-center justify-center space-x-2"
              >
                <InstagramIcon className="w-4 h-4 text-champagne" />
                <span>@hotelstarlinktheninehotel</span>
              </a>
            </div>

            <div className="pt-1.5 text-[9.5px] sm:text-[10px] text-soft-beige/50 font-sans">
              Check-in: {hotelInfo.checkInTime} · Check-out: {hotelInfo.checkOutTime}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] text-soft-beige/60 font-sans text-center sm:text-left">
          <div>
            © 2026 Hotel Starlink By The Nine Hotel. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <span>Mansarovar, Jaipur, Rajasthan, India</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-charcoal hover:bg-champagne hover:text-obsidian text-champagne transition-colors rounded-full border border-champagne/20 flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
