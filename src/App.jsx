import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ImageBreak from './components/ImageBreak';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import JaipurExperience from './components/JaipurExperience';
import LocationMap from './components/LocationMap';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import StickyMobileBooking from './components/StickyMobileBooking';
import AmbientSound from './components/AmbientSound';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  const handleOpenBooking = (data = {}) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-ivory flex flex-col font-sans selection:bg-champagne selection:text-obsidian relative">
      
      {/* Luxury Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Subtle Luxury Custom Cursor */}
      <CustomCursor />

      {/* Ambient Audio Soundscape Generator */}
      <AmbientSound />

      {/* Fixed Sticky Header Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Page Landmark */}
      <main className="flex-grow">
        {/* 1. Cinematic 100vh Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSelectRoom={(roomId) => handleOpenBooking({ roomId })}
        />

        {/* 2. Editorial Introduction Section */}
        <Intro onOpenBooking={handleOpenBooking} />

        {/* 3. Full-width Cinematic Image Break */}
        <ImageBreak />

        {/* 4. Luxury Rooms & Suites Section */}
        <Rooms onOpenBooking={handleOpenBooking} />

        {/* 5. Hotel Experience & Amenities Grid */}
        <Amenities />

        {/* 6. Gourmet Dining Section */}
        <Dining />

        {/* 7. Jaipur Story & Heritage Experiences */}
        <JaipurExperience />

        {/* 8. Mansarovar Location & Stylized Transit Map */}
        <LocationMap />

        {/* 9. Editorial Visual Masonry Gallery */}
        <Gallery />

        {/* 10. Restrained Testimonials & Guest Advisory FAQ */}
        <Testimonials />

        {/* 11. Dramatic Booking CTA Banner */}
        <BookingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 12. Sophisticated Black Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Sticky Booking Bar on Mobile */}
      <StickyMobileBooking onOpenBooking={handleOpenBooking} />

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

    </div>
  );
}
