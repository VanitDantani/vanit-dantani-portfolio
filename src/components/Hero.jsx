import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apple-gray">
      {/* Subtle background gradient / blob */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply" />

      <div className="section-padding text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6"
        >
          Vanit Dantani<br />
          Computer Engineering Student
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-apple-text-light mb-10 max-w-2xl mx-auto text-balance"
        >
          Aspiring AI Engineer passionate about building intelligent systems that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-apple-dark text-white font-medium hover:bg-black transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white text-apple-dark font-medium border border-black/10 hover:bg-gray-50 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
