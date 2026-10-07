import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Navbar({ onOpenBooking, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'STAY', href: '#rooms' },
    { name: 'DINING', href: '#dining' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'AMENITIES', href: '#amenities' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'LOCATION', href: '#location' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-md py-3 border-b border-champagne/15 shadow-2xl'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4 md:gap-8">
          
          {/* Typographic Luxury Brand Logo */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none flex-shrink-0"
            data-cursor="explore"
          >
            <span className="font-serif text-lg sm:text-xl xl:text-2xl tracking-[0.2em] sm:tracking-[0.24em] text-ivory font-light group-hover:text-champagne transition-colors">
              HOTEL STARLINK
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] xl:text-[9px] tracking-[0.35em] sm:tracking-[0.4em] text-champagne font-sans uppercase -mt-0.5">
              BY THE NINE HOTEL
            </span>
          </a>

          {/* Desktop Navigation Links - Centered with Generous Spacing */}
          <nav className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 text-[11px] 2xl:text-[12px] font-medium tracking-[0.18em] 2xl:tracking-[0.22em] text-soft-beige/90 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1.5 px-1 hover:text-ivory transition-colors group whitespace-nowrap"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 flex-shrink-0">
            {/* Quick direct call concierge */}
            <a
              href={`tel:${hotelInfo.phone}`}
              className="hidden sm:inline-flex text-soft-beige/85 hover:text-champagne transition-all items-center gap-1.5 px-3 py-1.5 rounded-full border border-champagne/25 bg-charcoal/50 hover:bg-champagne/10 whitespace-nowrap text-[10px] xl:text-[11px] tracking-widest uppercase flex-shrink-0"
              title="Call Concierge"
            >
              <Phone className="w-3 h-3 text-champagne flex-shrink-0" />
              <span className="font-sans">Concierge</span>
            </a>

            {/* Premium CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              data-cursor="book"
              className="relative px-3.5 sm:px-5 py-2 sm:py-2.5 bg-champagne text-obsidian text-[10px] sm:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase whitespace-nowrap flex-shrink-0 overflow-hidden transition-all duration-300 hover:bg-ivory hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] group flex items-center gap-1.5 sm:gap-2"
            >
              <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0 group-hover:rotate-6 transition-transform" />
              <span className="whitespace-nowrap">BOOK NOW</span>
            </button>

            {/* Mobile / Tablet Menu Trigger (Visible up to xl breakpoint) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-ivory hover:text-champagne hover:bg-charcoal/40 rounded-lg transition-colors focus:outline-none flex-shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 sm:pt-28 xl:hidden animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-6 text-center my-auto py-6">
            <div className="text-[10px] tracking-[0.4em] text-champagne uppercase font-sans">
              JAIPUR · MANSAROVAR
            </div>
            
            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-ivory hover:text-champagne transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col space-y-4 pt-6 border-t border-charcoal text-center mt-auto max-w-md mx-auto w-full">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 sm:py-4 bg-champagne text-obsidian text-xs font-semibold tracking-[0.25em] uppercase hover:bg-ivory transition-colors flex items-center justify-center gap-2"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href={`tel:${hotelInfo.phone}`}
                className="inline-flex items-center gap-1.5 text-xs tracking-wider text-soft-beige/80 hover:text-champagne"
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${hotelInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider text-soft-beige/80 hover:text-champagne"
              >
                <MessageCircle className="w-3.5 h-3.5 text-champagne" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

