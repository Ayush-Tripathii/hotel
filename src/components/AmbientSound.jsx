import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  const startAmbient = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft harmonic frequencies (C# Tanpura & Ambient chord: C#3, G#3, C#4, F4)
      const frequencies = [138.59, 207.65, 277.18, 349.23];
      const oscs = frequencies.map((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle micro-detune for warm shimmering texture
        osc.detune.setValueAtTime((i - 1.5) * 4, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.25, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        return osc;
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio context not supported", e);
    }
  };

  const stopAmbient = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.5);
      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch (e) {}
        });
        if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current.close();
        }
        setIsPlaying(false);
      }, 1500);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbient();
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <button
        onClick={toggleSound}
        data-cursor="explore"
        className={`px-3 py-2 rounded-full border backdrop-blur-md flex items-center space-x-2 text-[10px] tracking-widest uppercase transition-all duration-300 shadow-xl ${
          isPlaying
            ? 'bg-champagne text-obsidian border-champagne shadow-[0_0_20px_rgba(200,169,107,0.4)]'
            : 'bg-obsidian/85 text-soft-beige/70 border-champagne/20 hover:text-champagne hover:border-champagne/50'
        }`}
        title={isPlaying ? 'Mute Peaceful Ambience' : 'Play Soothing Hotel Ambience'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-sans font-medium">AMBIENCE ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span className="font-sans">SOUNDSCAPE</span>
          </>
        )}
      </button>
    </div>
  );
}
