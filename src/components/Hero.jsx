import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-transparent">

      <div className="section-padding text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-faang-text"
        >
          Building scalable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-faang-accent to-purple-500">
            software systems.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-faang-text-muted mb-10 max-w-2xl mx-auto text-balance font-mono text-sm md:text-base"
        >
          I'm Vanit Dantani, an aspiring AI Engineer focused on creating high-performance, intelligent applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-faang-text text-faang-bg font-medium hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] text-center"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-faang-surface text-faang-text font-medium border border-faang-border hover:border-faang-text-muted transition-colors text-center"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
