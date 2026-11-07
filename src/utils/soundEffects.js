// Luxury UI Audio Engine with Physical Acoustic Modeling
// Pre-renders studio-grade AudioBuffers for instant, zero-latency feedback on EVERY click

let audioCtx = null;
let soundEnabled = true;
let currentPreset = 'crystal'; // 'crystal' | 'wood' | 'mechanical'
let lastClickTime = 0;

// Pre-rendered Audio Buffers
let buffers = {
  universalClick: null,
  buttonClick: null,
  majorChime: null,
};

export function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;

  if (!audioCtx) {
    audioCtx = new AudioContext();
    generateSoundBuffers(audioCtx);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  return audioCtx;
}

export function isSoundEffectsEnabled() {
  if (typeof window === 'undefined') return true;
  try {
    const saved = localStorage.getItem('hotel_starlink_ui_sound');
    return saved !== null ? saved === 'true' : true;
  } catch (e) {
    return soundEnabled;
  }
}

export function setSoundEffectsEnabled(enabled) {
  soundEnabled = enabled;
  try {
    localStorage.setItem('hotel_starlink_ui_sound', enabled ? 'true' : 'false');
  } catch (e) {}
}

export function getSoundPreset() {
  if (typeof window === 'undefined') return 'crystal';
  try {
    return localStorage.getItem('hotel_starlink_sound_preset') || 'crystal';
  } catch (e) {
    return currentPreset;
  }
}

export function setSoundPreset(preset) {
  currentPreset = preset;
  try {
    localStorage.setItem('hotel_starlink_sound_preset', preset);
  } catch (e) {}
  if (audioCtx) {
    generateSoundBuffers(audioCtx, preset);
  }
}

/**
 * Procedurally pre-renders studio-quality acoustic AudioBuffers
 * Using physical modeling (crystal resonance, organic rosewood, damped mechanical)
 */
function generateSoundBuffers(ctx, preset = getSoundPreset()) {
  const sampleRate = ctx.sampleRate;

  // 1. Universal Page Click Buffer (Played on EVERY click anywhere on screen)
  const clickDuration = 0.045; // 45ms
  const clickFrames = Math.floor(sampleRate * clickDuration);
  const clickBuffer = ctx.createBuffer(2, clickFrames, sampleRate);
  const clickL = clickBuffer.getChannelData(0);
  const clickR = clickBuffer.getChannelData(1);

  for (let i = 0; i < clickFrames; i++) {
    const t = i / sampleRate;
    const progress = t / clickDuration;

    // Organic envelope: fast 1.2ms attack, smooth exponential decay
    const attack = Math.min(1, t / 0.0012);
    const decay = Math.exp(-t * 85);
    const env = attack * decay * (1 - progress * progress);

    let sample = 0;

    if (preset === 'wood') {
      // Warm Organic Rosewood Tap: Fundamental 380Hz + 2nd harmonic 760Hz + subtle grain
      const f1 = Math.sin(2 * Math.PI * 380 * t);
      const f2 = Math.sin(2 * Math.PI * 760 * t + 0.3) * 0.35;
      const transient = (Math.random() * 2 - 1) * Math.exp(-t * 220) * 0.18;
      sample = (f1 + f2 + transient) * env * 0.38;
    } else if (preset === 'mechanical') {
      // Precision Luxury Dial Click: Snap transient + damped metallic ring
      const transient = (Math.random() * 2 - 1) * Math.exp(-t * 300) * 0.45;
      const tone = Math.sin(2 * Math.PI * (1200 - t * 8000) * t) * 0.25;
      const sub = Math.sin(2 * Math.PI * 220 * t) * 0.15;
      sample = (transient + tone + sub) * env * 0.34;
    } else {
      // Default: 'crystal' Glass Bubble / Luxury Ceramic Tap
      // Clean, bright, elegant, extremely satisfying
      const glass = Math.sin(2 * Math.PI * 2400 * t) * Math.exp(-t * 180) * 0.25;
      const pitchDrop = 820 - progress * 320;
      const body = Math.sin(2 * Math.PI * pitchDrop * t) * 0.6;
      const shimmer = Math.sin(2 * Math.PI * 1640 * t + 0.4) * 0.22;
      const snap = (Math.random() * 2 - 1) * Math.exp(-t * 400) * 0.12;
      sample = (glass + body + shimmer + snap) * env * 0.35;
    }

    clickL[i] = sample;
    clickR[i] = sample * 0.98;
  }

  // 2. Button / Interactive Element Click Buffer (Slightly richer & warmer)
  const btnDuration = 0.06;
  const btnFrames = Math.floor(sampleRate * btnDuration);
  const btnBuffer = ctx.createBuffer(2, btnFrames, sampleRate);
  const btnL = btnBuffer.getChannelData(0);
  const btnR = btnBuffer.getChannelData(1);

  for (let i = 0; i < btnFrames; i++) {
    const t = i / sampleRate;
    const progress = t / btnDuration;
    const attack = Math.min(1, t / 0.001);
    const decay = Math.exp(-t * 70);
    const env = attack * decay * (1 - progress);

    // Warm tactile switch with resonant bell overtone
    const snap = (Math.random() * 2 - 1) * Math.exp(-t * 320) * 0.18;
    const f1 = Math.sin(2 * Math.PI * (640 - progress * 240) * t) * 0.55;
    const f2 = Math.sin(2 * Math.PI * 1280 * t) * 0.25;
    const sub = Math.sin(2 * Math.PI * 180 * t) * 0.2;
    const sample = (snap + f1 + f2 + sub) * env * 0.42;

    btnL[i] = sample;
    btnR[i] = sample;
  }

  // 3. Royal Chime Buffer (For Modals, Booking CTAs, Sound Toggles)
  const chimeDuration = 0.75;
  const chimeFrames = Math.floor(sampleRate * chimeDuration);
  const chimeBuffer = ctx.createBuffer(2, chimeFrames, sampleRate);
  const chimeL = chimeBuffer.getChannelData(0);
  const chimeR = chimeBuffer.getChannelData(1);

  // E Major Pentatonic Harmonics: E5 (659.25Hz), G#5 (830.6Hz), B5 (987.7Hz), E6 (1318.5Hz)
  const freqs = [659.25, 830.6, 987.7, 1318.5];
  for (let i = 0; i < chimeFrames; i++) {
    const t = i / sampleRate;
    let sL = 0;
    let sR = 0;

    freqs.forEach((freq, idx) => {
      const delay = idx * 0.018; // rolled arpeggio strum
      if (t >= delay) {
        const localT = t - delay;
        const noteAttack = Math.min(1, localT / 0.012);
        const noteDecay = Math.exp(-localT * (4.5 + idx * 0.8));
        const env = noteAttack * noteDecay;
        const wave = Math.sin(2 * Math.PI * freq * localT);
        const harmonic = Math.sin(2 * Math.PI * freq * 2 * localT) * 0.15;
        const val = (wave + harmonic) * env * (0.28 / (idx + 1));

        // Subtle stereo spread
        sL += val * (idx % 2 === 0 ? 1 : 0.7);
        sR += val * (idx % 2 === 0 ? 0.7 : 1);
      }
    });

    chimeL[i] = sL * 0.65;
    chimeR[i] = sR * 0.65;
  }

  buffers.universalClick = clickBuffer;
  buffers.buttonClick = btnBuffer;
  buffers.majorChime = chimeBuffer;
}

/**
 * Plays a pre-rendered AudioBuffer with subtle pitch randomization
 */
function playBuffer(buffer, baseVolume = 1.0, pitchVariation = 0.04) {
  if (!isSoundEffectsEnabled() || !buffer) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Organic micro-detune so repeated clicks sound natural and alive
    const detune = 1.0 + (Math.random() * 2 - 1) * pitchVariation;
    source.playbackRate.setValueAtTime(detune, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(baseVolume, ctx.currentTime);

    source.connect(gain);
    gain.connect(ctx.destination);

    source.start(ctx.currentTime);
  } catch (err) {}
}

/**
 * Universal Page Click — Triggered on EVERY click anywhere on screen
 */
export function playUniversalClick() {
  const now = Date.now();
  if (now - lastClickTime < 30) return; // Prevent double-triggering
  lastClickTime = now;

  if (!buffers.universalClick) {
    const ctx = getAudioContext();
    if (ctx) generateSoundBuffers(ctx);
  }
  playBuffer(buffers.universalClick, 0.85, 0.05);
}

/**
 * Button / Interactive Element Click
 */
export function playButtonClick() {
  const now = Date.now();
  if (now - lastClickTime < 30) return;
  lastClickTime = now;

  if (!buffers.buttonClick) {
    const ctx = getAudioContext();
    if (ctx) generateSoundBuffers(ctx);
  }
  playBuffer(buffers.buttonClick, 0.95, 0.03);
}

/**
 * Royal Palace Chime (For Booking, Modals, Audio Toggle)
 */
export function playChimeSound() {
  if (!buffers.majorChime) {
    const ctx = getAudioContext();
    if (ctx) generateSoundBuffers(ctx);
  }
  playBuffer(buffers.majorChime, 1.0, 0.01);
}

// Aliases for compatibility
export const playClickSound = playButtonClick;
export const playSoftTap = playUniversalClick;

/**
 * GLOBAL CLICK LISTENER:
 * Listens on pointerdown/click on the ENTIRE document.
 * EVERY click anywhere makes a sound!
 */
let listenerAttached = false;
export function initGlobalClickSounds() {
  if (typeof window === 'undefined' || listenerAttached) return;
  listenerAttached = true;

  // Pre-initialize buffers on first interaction
  const triggerAudio = (e) => {
    const ctx = getAudioContext();
    if (!ctx || !isSoundEffectsEnabled()) return;

    // Determine target type
    const target = e.target;
    if (!target) return;

    const interactive = target.closest(
      'button, a, [role="button"], input[type="submit"], input[type="button"], [data-cursor], [data-sound], .clickable, select, input[type="checkbox"], input[type="radio"], label'
    );

    if (interactive) {
      const soundType = interactive.getAttribute('data-sound');
      const text = (interactive.textContent || '').toLowerCase();
      const aria = (interactive.getAttribute('aria-label') || '').toLowerCase();

      const isBookingOrMajor =
        text.includes('book') ||
        text.includes('reserve') ||
        aria.includes('book') ||
        interactive.classList.contains('booking-trigger');

      if (soundType === 'chime' || isBookingOrMajor) {
        playChimeSound();
      } else {
        playButtonClick();
      }
    } else {
      // ANYWHERE ELSE ON THE SCREEN (background, image, text, card, container)
      playUniversalClick();
    }
  };

  // Use 'pointerdown' for instant zero-latency physical feedback
  document.addEventListener('pointerdown', triggerAudio, { capture: true, passive: true });
}
