import { motion } from 'framer-motion';
import { Mail, Globe, Code } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-apple-gray">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
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
            <h3 className="text-2xl font-bold mb-6 text-apple-dark">Let's connect.</h3>
            <p className="text-apple-text-light mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a href="mailto:vanitdantani05@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 group-hover:shadow-md transition-all">
                  <Mail className="text-apple-text group-hover:text-apple-blue transition-colors" />
                </div>
                <span className="text-lg font-medium text-apple-text group-hover:text-apple-blue transition-colors">vanitdantani05@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/vanit-dantani-23b2582b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 group-hover:shadow-md transition-all">
                  <Globe className="text-apple-text group-hover:text-apple-blue transition-colors" />
                </div>
                <span className="text-lg font-medium text-apple-text group-hover:text-apple-blue transition-colors">LinkedIn</span>
              </a>

              <a href="[GitHub URL]" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/5 group-hover:shadow-md transition-all">
                  <Code className="text-apple-text group-hover:text-apple-blue transition-colors" />
                </div>
                <span className="text-lg font-medium text-apple-text group-hover:text-apple-blue transition-colors">[GitHub URL]</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-apple-dark mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-apple-gray border-none focus:ring-2 focus:ring-apple-blue outline-none transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-apple-dark mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-apple-gray border-none focus:ring-2 focus:ring-apple-blue outline-none transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-apple-dark mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-apple-gray border-none focus:ring-2 focus:ring-apple-blue outline-none transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-apple-dark text-white rounded-xl font-semibold hover:bg-black transition-colors"
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
