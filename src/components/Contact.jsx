import { motion } from 'framer-motion';
import { Mail, Globe, Code } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-faang-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold mb-6 text-faang-text">Let's connect.</h3>
            <p className="text-faang-text-muted mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a href="mailto:vanitdantani05@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-faang-surface rounded-md flex items-center justify-center border border-faang-border group-hover:border-faang-accent transition-all">
                  <Mail className="text-faang-text-muted group-hover:text-faang-accent transition-colors" />
                </div>
                <span className="text-lg font-mono text-faang-text-muted group-hover:text-faang-text transition-colors">vanitdantani05@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/vanit-dantani-23b2582b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-faang-surface rounded-md flex items-center justify-center border border-faang-border group-hover:border-faang-accent transition-all">
                  <Globe className="text-faang-text-muted group-hover:text-faang-accent transition-colors" />
                </div>
                <span className="text-lg font-mono text-faang-text-muted group-hover:text-faang-text transition-colors">LinkedIn</span>
              </a>

              <a href="https://github.com/VanitDantani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-faang-surface rounded-md flex items-center justify-center border border-faang-border group-hover:border-faang-accent transition-all">
                  <Code className="text-faang-text-muted group-hover:text-faang-accent transition-colors" />
                </div>
                <span className="text-lg font-mono text-faang-text-muted group-hover:text-faang-text transition-colors">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-faang-text-muted mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-faang-bg border border-faang-border focus:border-faang-accent focus:ring-1 focus:ring-faang-accent outline-none transition-all text-faang-text"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-faang-text-muted mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-faang-bg border border-faang-border focus:border-faang-accent focus:ring-1 focus:ring-faang-accent outline-none transition-all text-faang-text"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-faang-text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md bg-faang-bg border border-faang-border focus:border-faang-accent focus:ring-1 focus:ring-faang-accent outline-none transition-all text-faang-text resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-faang-text text-faang-bg rounded-md font-bold hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
