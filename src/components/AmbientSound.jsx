import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Sliders, Play, Pause, ChevronDown, Check } from 'lucide-react';
import {
  playChimeSound,
  playButtonClick,
  playUniversalClick,
  isSoundEffectsEnabled,
  setSoundEffectsEnabled,
  getSoundPreset,
  setSoundPreset
} from '../utils/soundEffects';

const SOUND_PRESETS = [
  {
    id: 'crystal',
    name: 'Crystal Glass (Recommended)',
    desc: 'Crisp, delicate, modern luxury bubble tap',
  },
  {
    id: 'wood',
    name: 'Organic Rosewood',
    desc: 'Warm, solid, muted acoustic timber tap',
  },
  {
    id: 'mechanical',
    name: 'Tactile Switch',
    desc: 'Precision mechanical dial click',
  },
];

const MUSIC_TRACKS = [
  {
    id: 'waterlily',
    name: 'Water Lily (Acoustic Guitar)',
    desc: 'Peaceful acoustic melody & calming strings',
    file: 'audio/water-lily.mp3',
  },
  {
    id: 'palace',
    name: 'Palace Wind Chimes',
    desc: 'Generative soft courtyard bells & tanpura',
    file: null,
  },
];

export default function AmbientSound() {
  const [clicksEnabled, setClicksEnabled] = useState(true);
  const [activePreset, setActivePreset] = useState('crystal');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState('waterlily');
  const [musicVolume, setMusicVolume] = useState(0.35);
  const [showPanel, setShowPanel] = useState(false);

  const audioRef = useRef(null);
  const proceduralCtxRef = useRef(null);
  const proceduralGainRef = useRef(null);
  const proceduralNodesRef = useRef([]);
  const chimeTimerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setClicksEnabled(isSoundEffectsEnabled());
    setActivePreset(getSoundPreset());
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowPanel(false);
      }
    };
    if (showPanel) {
      document.addEventListener('mousedown', handleOutside);
    }
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [showPanel]);

  const getAssetUrl = (relativePath) => {
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return `${cleanBase}${cleanPath}`;
  };

  /* ---------------- Procedural Palace Chimes ---------------- */
  const startProcedural = (vol) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      proceduralCtxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(Math.max(0.001, vol * 0.12), ctx.currentTime + 2);
      master.connect(ctx.destination);
      proceduralGainRef.current = master;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);
      filter.connect(master);

      const chord = [138.59, 207.65, 277.18, 349.23];
      const nodes = chord.map((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.detune.setValueAtTime((i - 1.5) * 4, ctx.currentTime);
        g.gain.setValueAtTime(0.12 / (i + 1), ctx.currentTime);
        osc.connect(g);
        g.connect(filter);
        osc.start();
        return osc;
      });

      const chimeNotes = [554.37, 659.25, 830.61, 987.77, 1108.73];
      const triggerChime = () => {
        if (!proceduralCtxRef.current || proceduralCtxRef.current.state === 'closed') return;
        const note = chimeNotes[Math.floor(Math.random() * chimeNotes.length)];
        const pCtx = proceduralCtxRef.current;
        const t = pCtx.currentTime;

        const osc = pCtx.createOscillator();
        const g = pCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, t);

        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(vol * 0.06, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.00001, t + 2.5);

        osc.connect(g);
        g.connect(master);
        osc.start(t);
        osc.stop(t + 2.6);

        chimeTimerRef.current = setTimeout(triggerChime, 4000 + Math.random() * 4000);
      };

      triggerChime();
      proceduralNodesRef.current = nodes;
    } catch (e) {}
  };

  const stopProcedural = () => {
    if (chimeTimerRef.current) clearTimeout(chimeTimerRef.current);
    if (proceduralCtxRef.current && proceduralGainRef.current) {
      try {
        const ctx = proceduralCtxRef.current;
        proceduralGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          proceduralNodesRef.current.forEach((n) => {
            try {
              n.stop();
            } catch (err) {}
          });
          if (ctx.state !== 'closed') ctx.close();
          proceduralCtxRef.current = null;
        }, 1100);
      } catch (e) {
        proceduralCtxRef.current = null;
      }
    }
  };

  /* ---------------- Recorded Audio ---------------- */
  const startRecorded = (file, vol) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }
    const audio = audioRef.current;
    const url = getAssetUrl(file);
    if (audio.src !== url && !audio.src.endsWith(file)) {
      audio.src = url;
    }

    audio.volume = 0;
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => {
        let cur = 0;
        const step = vol / 20;
        const iv = setInterval(() => {
          cur = Math.min(vol, cur + step);
          if (audio) audio.volume = cur;
          if (cur >= vol) clearInterval(iv);
        }, 60);
      }).catch(() => {});
    }
  };

  const stopRecorded = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    let cur = audio.volume;
    const step = cur / 15;
    const iv = setInterval(() => {
      cur = Math.max(0, cur - step);
      if (audio) audio.volume = cur;
      if (cur <= 0.01) {
        clearInterval(iv);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    }, 50);
  };

  const playMusic = (trackId, vol) => {
    stopProcedural();
    stopRecorded();

    const track = MUSIC_TRACKS.find((t) => t.id === trackId) || MUSIC_TRACKS[0];
    if (track.file) {
      startRecorded(track.file, vol);
    } else {
      startProcedural(vol);
    }
    setIsMusicPlaying(true);
  };

  const stopMusic = () => {
    stopProcedural();
    stopRecorded();
    setIsMusicPlaying(false);
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      playButtonClick();
      stopMusic();
    } else {
      playChimeSound();
      playMusic(selectedMusic, musicVolume);
    }
  };

  const toggleClickSounds = () => {
    const next = !clicksEnabled;
    setClicksEnabled(next);
    setSoundEffectsEnabled(next);
    if (next) {
      playChimeSound();
    }
  };

  const handlePresetSelect = (id) => {
    setActivePreset(id);
    setSoundPreset(id);
    // Instant audio preview of chosen preset
    setTimeout(() => {
      playButtonClick();
    }, 20);
  };

  const handleMusicTrackSelect = (id) => {
    playButtonClick();
    setSelectedMusic(id);
    if (isMusicPlaying) {
      playMusic(id, musicVolume);
    }
  };

  const handleVolumeChange = (v) => {
    setMusicVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
    if (proceduralGainRef.current && proceduralCtxRef.current) {
      proceduralGainRef.current.gain.setValueAtTime(
        Math.max(0.001, v * 0.12),
        proceduralCtxRef.current.currentTime
      );
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-24 left-4 lg:bottom-6 lg:left-6 z-40 flex flex-col items-start select-none"
    >
      {/* EXPANDABLE AUDIO SETTINGS POPUP */}
      {showPanel && (
        <div className="mb-3 w-72 sm:w-80 p-4 bg-obsidian/95 backdrop-blur-2xl border border-champagne/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.85)] text-ivory text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-champagne/15">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="font-serif tracking-widest text-champagne text-[11px] uppercase">
                Audio Preferences
              </span>
            </div>
            <button
              onClick={() => setShowPanel(false)}
              className="text-soft-beige/60 hover:text-champagne transition-colors p-1"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Sound on All Clicks */}
          <div className="mt-3.5 flex items-center justify-between pb-3 border-b border-champagne/15">
            <div>
              <div className="font-medium text-[11px] text-ivory flex items-center space-x-1.5">
                <span>Sound on Every Click</span>
                <span className="text-[9px] uppercase tracking-wider text-champagne bg-champagne/15 px-1.5 py-0.5 rounded">
                  All Clicks
                </span>
              </div>
              <div className="text-[9.5px] text-soft-beige/50 mt-0.5">
                Tactile audio feedback anywhere you click on the page
              </div>
            </div>
            <button
              onClick={toggleClickSounds}
              className={`w-9 h-5 rounded-full transition-colors relative flex items-center p-0.5 ${
                clicksEnabled ? 'bg-champagne' : 'bg-charcoal border border-champagne/20'
              }`}
              title={clicksEnabled ? 'Disable click sounds' : 'Enable click sounds'}
            >
              <div
                className={`w-4 h-4 rounded-full bg-obsidian transition-transform shadow-md ${
                  clicksEnabled ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Section 2: Click Sound Style (Presets) */}
          <div className="mt-3.5 pb-3.5 border-b border-champagne/15">
            <span className="text-[10px] uppercase tracking-wider text-soft-beige/60 font-medium block mb-2">
              Click Sound Style
            </span>
            <div className="space-y-1.5">
              {SOUND_PRESETS.map((p) => {
                const isSelected = activePreset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handlePresetSelect(p.id)}
                    className={`w-full text-left p-2 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-champagne/15 border-champagne/60 text-champagne'
                        : 'bg-charcoal/40 border-champagne/10 text-soft-beige/70 hover:bg-charcoal/70 hover:text-ivory'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-[10.5px] tracking-wide">{p.name}</div>
                      <div className="text-[9px] text-soft-beige/50 font-sans">{p.desc}</div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-champagne flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Optional Background Music */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-soft-beige/60 font-medium">
                Hotel Music (Optional)
              </span>
              <button
                onClick={toggleMusic}
                className={`px-2 py-1 rounded text-[10px] font-medium tracking-wide flex items-center space-x-1 transition-all ${
                  isMusicPlaying
                    ? 'bg-champagne text-obsidian font-semibold'
                    : 'bg-charcoal border border-champagne/25 text-champagne hover:bg-champagne/20'
                }`}
              >
                {isMusicPlaying ? (
                  <>
                    <Pause className="w-2.5 h-2.5" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>PLAY</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-1.5">
              {MUSIC_TRACKS.map((t) => {
                const selected = selectedMusic === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleMusicTrackSelect(t.id)}
                    className={`w-full text-left p-2 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                      selected
                        ? 'bg-champagne/15 border-champagne/60 text-champagne'
                        : 'bg-charcoal/40 border-champagne/10 text-soft-beige/70 hover:bg-charcoal/70 hover:text-ivory'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-[10.5px] tracking-wide flex items-center space-x-1.5">
                        <span>{t.name}</span>
                        {selected && isMusicPlaying && (
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse inline-block" />
                        )}
                      </div>
                      <div className="text-[9px] text-soft-beige/50 font-sans">{t.desc}</div>
                    </div>
                    {selected && <Check className="w-3.5 h-3.5 text-champagne flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Music Volume */}
            {isMusicPlaying && (
              <div className="mt-2.5 pt-2">
                <div className="flex items-center justify-between mb-1 text-[9px] uppercase tracking-wider text-soft-beige/60">
                  <span>Music Volume</span>
                  <span className="font-mono text-champagne">{Math.round(musicVolume * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={musicVolume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-1 bg-charcoal rounded-lg appearance-none cursor-pointer accent-champagne"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* COMPACT FLOATING LUXURY AUDIO PILL */}
      <div className="flex items-center space-x-1.5">
        <button
          onClick={toggleClickSounds}
          className={`px-3 py-2 sm:px-3.5 sm:py-2 rounded-full border backdrop-blur-xl flex items-center space-x-2 text-[10px] sm:text-[11px] tracking-widest uppercase transition-all duration-300 shadow-2xl ${
            clicksEnabled
              ? 'bg-obsidian/90 text-champagne border-champagne/40 hover:border-champagne hover:bg-obsidian shadow-[0_0_20px_rgba(200,169,107,0.25)]'
              : 'bg-obsidian/90 text-soft-beige/40 border-champagne/15 hover:border-champagne/40 hover:text-soft-beige shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          }`}
          title={clicksEnabled ? 'Sound is ON for all clicks (Tap to Mute)' : 'Sound is MUTED (Tap to Unmute)'}
        >
          {clicksEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-champagne animate-pulse" />
              <span className="font-sans font-medium tracking-wide">SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="font-sans">SOUND MUTED</span>
            </>
          )}
        </button>

        {/* Music Active Indicator */}
        {isMusicPlaying && (
          <button
            onClick={toggleMusic}
            className="px-2.5 py-2 rounded-full border bg-champagne text-obsidian border-champagne text-[10px] font-semibold tracking-wider flex items-center space-x-1.5 shadow-[0_0_20px_rgba(200,169,107,0.4)] animate-pulse"
            title="Music is playing (Tap to Pause)"
          >
            <div className="flex items-end space-x-0.5 h-3">
              <span className="w-0.5 bg-obsidian rounded-full animate-[equalizer_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 bg-obsidian rounded-full animate-[equalizer_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 bg-obsidian rounded-full animate-[equalizer_0.9s_ease-in-out_infinite_0.4s]" />
            </div>
            <span className="hidden sm:inline">MUSIC</span>
          </button>
        )}

        {/* Settings Button */}
        <button
          onClick={() => {
            playButtonClick();
            setShowPanel(!showPanel);
          }}
          className={`p-2 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-xl ${
            showPanel
              ? 'bg-champagne text-obsidian border-champagne shadow-[0_0_15px_rgba(200,169,107,0.3)]'
              : 'bg-obsidian/90 text-soft-beige/70 border-champagne/20 hover:text-champagne hover:border-champagne/50'
          }`}
          title="Sound Style & Audio Settings"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
