import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const phrases = [
  'software systems.',
  'web applications.',
  'Backend systems.',
  'scalable APIs.',
  'intelligent tools.',
];

const SHOOT_DURATION = 1100; // ms for star to cross
const HOLD_DURATION  = 2400; // ms to hold text
const FADE_DURATION  = 600;  // ms to fade out text

function MeteorText() {
  const [idx, setIdx]                 = useState(0);
  const [phase, setPhase]             = useState('shooting'); // shooting | holding | fading
  const [revealedCount, setRevealedCount] = useState(0);
  const [starX, setStarX]             = useState(-180);
  const [starY, setStarY]             = useState(0); // small vertical drift
  const containerRef                  = useRef(null);
  const letterRefs                    = useRef([]);
  const rafRef                        = useRef(null);
  const holdTimerRef                  = useRef(null);
  const nextTimerRef                  = useRef(null);

  const phrase = phrases[idx];

  // Reset letter refs array length on phrase change
  letterRefs.current = letterRefs.current.slice(0, phrase.length);

  useEffect(() => {
    // Random slight vertical drift so each meteor feels unique
    setStarY(Math.random() * 10 - 5);
    setRevealedCount(0);
    setStarX(-180);
    setPhase('shooting');

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / SHOOT_DURATION, 1);

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const totalTravel = rect.width + 240;
      const curX = -180 + progress * totalTravel;
      setStarX(curX);

      // Reveal letters whose centre the star has passed
      let count = 0;
      for (let i = 0; i < letterRefs.current.length; i++) {
        const el = letterRefs.current[i];
        if (!el) continue;
        const lr = el.getBoundingClientRect();
        const letterCX = lr.left - rect.left + lr.width / 2;
        if (curX >= letterCX) count = i + 1;
      }
      setRevealedCount(count);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Ensure all letters revealed
        setRevealedCount(phrase.length);
        setPhase('holding');

        holdTimerRef.current = setTimeout(() => setPhase('fading'), HOLD_DURATION);
        nextTimerRef.current = setTimeout(() => {
          setIdx(i => (i + 1) % phrases.length);
        }, HOLD_DURATION + FADE_DURATION);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(holdTimerRef.current);
      clearTimeout(nextTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      style={{ minWidth: '260px' }}
    >
      {/* ── Shooting Star ── */}
      {phase === 'shooting' && (
        <div
          className="absolute pointer-events-none z-20"
          style={{
            left: starX,
            top: `calc(50% + ${starY}px)`,
            transform: 'translateY(-50%)',
          }}
        >
          {/* Fire tail */}
          <div style={{
            width: 180,
            height: 3,
            background:
              'linear-gradient(to right, transparent, rgba(255,80,0,0.2), rgba(255,140,0,0.6), rgba(255,220,100,0.9), #ffffff)',
            boxShadow: '0 0 8px 4px rgba(255,120,0,0.45), 0 0 18px 6px rgba(255,60,0,0.2)',
            borderRadius: 4,
          }} />
          {/* Sparks along the tail */}
          {[0.3, 0.55, 0.75].map((frac, si) => (
            <div
              key={si}
              style={{
                position: 'absolute',
                left: 180 * frac,
                top: `${(si % 2 === 0 ? -2 : 2) + Math.random() * 2 - 1}px`,
                width: 3 - si * 0.5,
                height: 3 - si * 0.5,
                borderRadius: '50%',
                background: '#ffcc44',
                boxShadow: '0 0 4px 2px rgba(255,160,0,0.8)',
                opacity: 0.9 - si * 0.2,
              }}
            />
          ))}
          {/* Bright core */}
          <div style={{
            position: 'absolute',
            right: -5,
            top: '50%',
            transform: 'translate(50%, -50%)',
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow:
              '0 0 6px 3px #ffe580, 0 0 14px 6px rgba(255,140,0,0.9), 0 0 30px 10px rgba(255,60,0,0.5)',
          }} />
        </div>
      )}

      {/* ── Gradient Text letters ── */}
      <span
        className="font-bold"
        style={{
          display: 'inline-block',
          opacity: phase === 'fading' ? 0 : 1,
          transition: phase === 'fading' ? `opacity ${FADE_DURATION}ms ease-out` : 'none',
        }}
      >
        {phrase.split('').map((char, i) => {
          // Fire glow on the 1-3 letters just behind the star
          const justRevealed = i >= revealedCount - 3 && i < revealedCount;
          return (
            <span
              key={`${idx}-${i}`}
              ref={el => { letterRefs.current[i] = el; }}
              style={{
                display: 'inline-block',
                opacity: i < revealedCount ? 1 : 0,
                // Gradient per-letter using hue spread
                color: 'transparent',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                backgroundImage: `linear-gradient(90deg, #0070f3, #7928ca, #ff0080)`,
                backgroundSize: `${phrase.length * 18}px 100%`,
                backgroundPosition: `-${i * 18}px 0`,
                textShadow: justRevealed
                  ? '0 0 18px #ff9900, 0 0 36px #ff4400, 0 0 60px rgba(255,80,0,0.6)'
                  : 'none',
                transition: 'text-shadow 1.2s ease-out, opacity 0s',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-transparent pt-32 md:pt-20 min-h-[90vh]"
    >
      {/* Ambient glow behind heading */}
      <motion.div
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-faang-accent/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-padding text-center relative z-10">

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-faang-surface border border-faang-border text-faang-text-muted text-sm font-mono"
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={14} className="text-faang-accent" />
          </motion.span>
          Open to new opportunities
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display text-balance mb-2 leading-[1.15]">
          {/* Static top line */}
          <motion.span
            className="block text-faang-text"
            initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Building scalable
          </motion.span>

          {/* Meteor-write line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex justify-center items-center h-[1.2em] overflow-visible"
          >
            <MeteorText />
          </motion.div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-faang-text-muted mb-10 max-w-2xl mx-auto font-mono text-sm md:text-base mt-6"
        >
          I'm Vanit Dantani, an aspiring AI Engineer focused on creating
          high-performance, intelligent applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(0,112,243,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-faang-text text-faang-bg font-display font-medium hover:bg-white/90 transition-colors text-center"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-faang-surface text-faang-text font-display font-medium border border-faang-border hover:border-faang-text-muted transition-colors text-center"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2 text-faang-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
