import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = [
  'software systems.',
  'web applications.',
  'Backend systems.',
  'scalable APIs.',
  'intelligent tools.',
];

const HOLD_DURATION = 2600; // ms to hold before switching

// Each LETTER drops from above one by one
function DroppingWords({ phrase, onDone }) {
  const chars = phrase.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
    exit: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  };

  const letterVariants = {
    hidden: {
      y: -70,
      opacity: 0,
      rotateX: -45,
      filter: 'blur(4px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        mass: 0.9,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      filter: 'blur(3px)',
      transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
    },
  };

  // total drop time = delayChildren + stagger * chars + spring settle (~600ms)
  useEffect(() => {
    const delay = 50 + chars.length * 60 + 600 + HOLD_DURATION;
    const t = setTimeout(onDone, delay);
    return () => clearTimeout(t);
  }, [phrase]);

  return (
    <motion.span
      className="inline-flex flex-wrap justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ perspective: '500px' }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block origin-top"
          style={{
            // space character keeps its width
            width: char === ' ' ? '0.3em' : undefined,
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: 'linear-gradient(135deg, #0070f3 0%, #7928ca 50%, #ff0080 100%)',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function CyclingPhrase() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleDone = () => {
    setVisible(false);
    setTimeout(() => {
      setIdx(i => (i + 1) % phrases.length);
      setVisible(true);
    }, 500);
  };

  return (
    <span className="inline-block overflow-visible">
      <AnimatePresence mode="wait">
        {visible && (
          <DroppingWords
            key={idx}
            phrase={phrases[idx]}
            onDone={handleDone}
          />
        )}
      </AnimatePresence>
    </span>
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
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-faang-accent/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-padding text-center relative z-10">



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

          {/* Dropping words line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex justify-center items-center min-h-[1.2em] overflow-visible"
            style={{ perspective: '600px' }}
          >
            <CyclingPhrase />
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
