import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, BedDouble, Phone, MessageSquare, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { hotelInfo, roomCategories } from '../data/hotelData';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [checkIn, setCheckIn] = useState(initialData.checkIn || new Date().toISOString().split('T')[0]);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [checkOut, setCheckOut] = useState(initialData.checkOut || tomorrow.toISOString().split('T')[0]);
  const [roomId, setRoomId] = useState(initialData.roomId || roomCategories[0].id);
  const [guests, setGuests] = useState(initialData.guests || '2');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialData.roomId) setRoomId(initialData.roomId);
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
  }, [initialData]);

  if (!isOpen) return null;

  const selectedRoomObj = roomCategories.find((r) => r.id === roomId) || roomCategories[0];

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert("Please enter your name and phone number for reservation confirmation.");
      return;
    }

    const message = `*HOTEL STARLINK - RESERVATION INQUIRY*%0A%0A*Guest Name:* ${encodeURIComponent(guestName)}%0A*Phone:* ${encodeURIComponent(guestPhone)}%0A*Room Type:* ${encodeURIComponent(selectedRoomObj.name)}%0A*Check-in:* ${checkIn}%0A*Check-out:* ${checkOut}%0A*Guests:* ${guests}%0A*Special Requests:* ${encodeURIComponent(specialRequest || 'None')}%0A%0APlease confirm room availability and payment details.`;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);
    setTimeout(() => {
      window.open(`https://wa.me/${hotelInfo.whatsapp}?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 w-full max-w-2xl bg-charcoal border border-champagne/30 shadow-2xl p-4 sm:p-8 md:p-10 my-auto text-ivory max-h-[94vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 p-2 bg-obsidian/85 hover:bg-champagne hover:text-obsidian text-ivory border border-champagne/30 transition-colors rounded-full shadow-lg"
            aria-label="Close booking modal"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="text-center pb-6 border-b border-champagne/20">
                <span className="text-[10px] tracking-[0.4em] text-champagne uppercase font-sans font-semibold">
                  HOTEL STARLINK · BY THE NINE HOTEL
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-light tracking-wide mt-2">
                  Reserve Your Stay
                </h3>
                <p className="mt-1.5 text-xs text-soft-beige/70 font-sans">
                  Direct reservation concierge · Best rate guarantee in Mansarovar, Jaipur
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleWhatsAppBooking} className="mt-6 space-y-5">
                
                {/* Dates Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-champagne font-sans flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Check-in Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-champagne font-sans flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Check-out Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none"
                    />
                  </div>
                </div>

                {/* Room Category Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-champagne font-sans flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5" /> Select Accommodation
                  </label>
                  <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none"
                  >
                    {roomCategories.map((r) => (
                      <option key={r.id} value={r.id} className="bg-charcoal text-ivory">
                        {r.name} — Starting ₹{r.basePriceINR.toLocaleString('en-IN')}/night ({r.bed})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-champagne font-sans flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none"
                  >
                    <option value="1">1 Adult (Solo Traveler)</option>
                    <option value="2">2 Adults (1 Room)</option>
                    <option value="3">3 Adults (Executive / Extra Bed)</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="Family / Group">Family Group (Multiple Rooms)</option>
                  </select>
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-champagne font-sans">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none placeholder-soft-beige/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-champagne font-sans">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none placeholder-soft-beige/40"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-soft-beige/60 font-sans">
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. High floor room, late check-in, airport pickup assist"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full p-3 bg-obsidian border border-charcoal focus:border-champagne text-xs text-ivory focus:outline-none placeholder-soft-beige/30"
                  />
                </div>

                {/* Primary CTA: WhatsApp Instant Reservation */}
                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    data-cursor="book"
                    className="w-full py-4 bg-champagne text-obsidian text-xs font-bold tracking-[0.24em] uppercase hover:bg-ivory hover:shadow-[0_0_30px_rgba(200,169,107,0.4)] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-obsidian" />
                    <span>CONNECT & CONFIRM VIA WHATSAPP</span>
                  </button>

                  {/* Secondary Direct Booking Options */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={`tel:${hotelInfo.phone}`}
                      className="py-3 px-3 bg-obsidian border border-charcoal text-center text-[10px] tracking-wider uppercase text-soft-beige/80 hover:text-champagne hover:border-champagne transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-champagne" />
                      <span>Call Concierge</span>
                    </a>

                    <a
                      href={hotelInfo.bookingEngineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-3 bg-obsidian border border-charcoal text-center text-[10px] tracking-wider uppercase text-soft-beige/80 hover:text-champagne hover:border-champagne transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Online OTA Engine</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[10px] text-soft-beige/60 pt-2 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
                  <span>No upfront payment required for inquiry · Direct hotel support</span>
                </div>

              </form>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-champagne/20 border border-champagne text-champagne mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-3xl text-ivory">Reservation Request Initiated</h3>
                <p className="mt-2 text-sm text-soft-beige/80 max-w-md mx-auto">
                  Thank you, <span className="text-champagne font-medium">{guestName}</span>. Your reservation inquiry for <span className="text-champagne font-medium">{selectedRoomObj.name}</span> has been prepared. Our front desk concierge will confirm your booking instantly.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-8 py-3 bg-champagne text-obsidian text-xs font-bold tracking-widest uppercase hover:bg-ivory transition-colors"
                >
                  RETURN TO WEBSITE
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
