import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// Typewriter hook – types and deletes text in a loop
function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayed === current) {
      // Finished typing – pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed === '') {
      // Finished deleting – move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const next = isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1);
      timeout = setTimeout(() => setDisplayed(next), isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const typewriterText = useTypewriter([
    'software systems.',
    'AI-powered apps.',
    'scalable APIs.',
    'full-stack solutions.',
  ]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-transparent pt-32 md:pt-20 min-h-[90vh]"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-faang-accent/10 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-padding text-center relative z-10">

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-faang-surface border border-faang-border text-faang-text-muted text-sm font-mono"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={14} className="text-faang-accent" />
          </motion.span>
          Open to new opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight font-display text-balance mb-6 text-faang-text"
        >
          Building scalable <br />

          {/* Typewriter line with animated gradient */}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #0070f3, #7928ca, #ff0080)',
            }}
          >
            {typewriterText}
          </span>

          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-1 w-[3px] h-[0.9em] align-middle bg-faang-accent rounded-sm"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-faang-text-muted mb-10 max-w-2xl mx-auto font-mono text-sm md:text-base"
        >
          I'm Vanit Dantani, an aspiring AI Engineer focused on creating high-performance, intelligent applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0,112,243,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-faang-text text-faang-bg font-display font-medium hover:bg-white/90 transition-colors text-center"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
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
          transition={{ delay: 1.2, duration: 1 }}
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
