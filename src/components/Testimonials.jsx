import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { guestReviews, faqs } from '../data/hotelData';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-28 md:py-36 bg-ivory text-obsidian overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-muted-gold" />
            <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-muted-gold uppercase font-sans font-semibold">
              GUEST EXPERIENCES
            </span>
            <span className="w-8 h-[1px] bg-muted-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian font-normal tracking-tight">
            WORDS FROM OUR GUESTS.
          </h2>

          <p className="mt-4 font-serif italic text-base md:text-lg text-obsidian/70">
            Real impressions from travellers visiting Jaipur.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guestReviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 bg-white/70 border border-muted-gold/20 shadow-lg flex flex-col justify-between"
            >
              {/* Top Quote Icon & Rating Stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-muted-gold/40 fill-current" />
                  <div className="flex space-x-1 text-muted-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="font-serif text-base sm:text-lg text-obsidian/90 font-light leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Guest Attribution */}
              <div className="mt-8 pt-6 border-t border-obsidian/10">
                <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-obsidian">
                  {rev.guest}
                </h4>
                <div className="flex items-center justify-between mt-1 text-[11px] text-obsidian/60 font-sans">
                  <span>{rev.source}</span>
                  <span className="text-muted-gold font-medium">{rev.room}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-28 pt-20 border-t border-obsidian/15 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.35em] text-muted-gold uppercase font-sans font-semibold">
              STAY ADVISORY & FAQS
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-obsidian font-normal mt-2">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/60 border border-muted-gold/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif text-lg text-obsidian hover:text-muted-gold transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-muted-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-gold/70 flex-shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-obsidian/75 font-sans leading-relaxed border-t border-obsidian/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
