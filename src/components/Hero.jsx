import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

// Scramble hook: cycles random chars before settling on target word
function useScramble(target, { duration = 1200, fps = 30 } = {}) {
  const [text, setText] = useState('');
  const frameRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    const totalFrames = Math.floor((duration / 1000) * fps);
    let frame = 0;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      frame++;

      const progress = Math.min(frame / totalFrames, 1);
      // How many letters are "resolved" increases over time
      const resolved = Math.floor(progress * target.length);

      const result = target
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < resolved) return char; // locked in
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setText(result);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, fps]);

  return text;
}

const phrases = [
  'software systems.',
  'AI-powered apps.',
  'scalable APIs.',
  'intelligent tools.',
];

// Slot flip animation variants
const slotVariants = {
  enter: { y: 40, opacity: 0, filter: 'blur(6px)' },
  center: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: -40, opacity: 0, filter: 'blur(6px)', transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
};

function ScrambleSlot() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('scramble'); // 'scramble' | 'hold'
  const target = phrases[index];
  const scrambled = useScramble(phase === 'scramble' ? target : target, {
    duration: phase === 'scramble' ? 1000 : 0,
  });

  useEffect(() => {
    // After scramble settles, hold then move to next
    const scrambleDuration = 1200;
    const holdDuration = 2000;

    const t1 = setTimeout(() => setPhase('hold'), scrambleDuration);
    const t2 = setTimeout(() => {
      setPhase('scramble');
      setIndex((i) => (i + 1) % phrases.length);
    }, scrambleDuration + holdDuration);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        variants={slotVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="block text-transparent bg-clip-text font-bold"
        style={{
          backgroundImage: 'linear-gradient(90deg, #0070f3 0%, #7928ca 50%, #ff0080 100%)',
        }}
      >
        {scrambled || '\u00A0'}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-transparent pt-32 md:pt-20 min-h-[90vh]"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-faang-accent/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.75, 0.4] }}
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display text-balance mb-2 leading-[1.1]">
          {/* Static line — blur-reveal on mount */}
          <motion.span
            className="block text-faang-text"
            initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Building scalable
          </motion.span>

          {/* Scramble + Slot line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative h-[1.15em] overflow-hidden"
          >
            <ScrambleSlot />
          </motion.div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-faang-text-muted mb-10 max-w-2xl mx-auto font-mono text-sm md:text-base mt-6"
        >
          I'm Vanit Dantani, an aspiring AI Engineer focused on creating high-performance, intelligent applications.
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
