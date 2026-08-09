import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "88b99e09-cdec-4328-91d3-ddc46127ef96");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! 🎉");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-faang-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-faang-text tracking-tight leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-faang-accent to-purple-500">amazing together.</span>
            </h3>
            <p className="text-faang-text-muted mb-12 text-lg font-light leading-relaxed">
              Whether you have a visionary project in mind or just want to say hello, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:vanitdantani05@gmail.com" className="bento-card p-6 flex flex-col items-center justify-center text-center group hover:border-faang-accent/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-faang-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Mail className="w-8 h-8 text-faang-text-muted group-hover:text-faang-accent group-hover:-translate-y-1 transition-all duration-300 mb-4" />
                <span className="text-sm font-mono text-faang-text group-hover:text-faang-accent transition-colors">Email Me</span>
              </a>
              
              <a href="https://www.linkedin.com/in/vanit-dantani-23b2582b1" target="_blank" rel="noopener noreferrer" className="bento-card p-6 flex flex-col items-center justify-center text-center group hover:border-faang-accent/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077b5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Globe className="w-8 h-8 text-faang-text-muted group-hover:text-[#0077b5] group-hover:-translate-y-1 transition-all duration-300 mb-4" />
                <span className="text-sm font-mono text-faang-text group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
              </a>

              <a href="https://github.com/VanitDantani" target="_blank" rel="noopener noreferrer" className="bento-card p-6 flex flex-col items-center justify-center text-center group hover:border-faang-accent/50 transition-all duration-300 relative overflow-hidden col-span-2 sm:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-faang-text/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Code className="w-8 h-8 text-faang-text-muted group-hover:text-faang-text group-hover:-translate-y-1 transition-all duration-300 mb-4" />
                <span className="text-sm font-mono text-faang-text transition-colors">GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card p-8 md:p-12 relative overflow-hidden border border-faang-border/50 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-faang-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={onSubmit}>
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-xs font-mono tracking-widest text-faang-text-muted uppercase group-focus-within:text-faang-accent transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-faang-border focus:border-faang-accent py-3 text-faang-text outline-none transition-all placeholder:text-faang-text-muted/30"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-xs font-mono tracking-widest text-faang-text-muted uppercase group-focus-within:text-faang-accent transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-faang-border focus:border-faang-accent py-3 text-faang-text outline-none transition-all placeholder:text-faang-text-muted/30"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2 group">
                <label htmlFor="message" className="text-xs font-mono tracking-widest text-faang-text-muted uppercase group-focus-within:text-faang-accent transition-colors">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-faang-border focus:border-faang-accent py-3 text-faang-text outline-none transition-all placeholder:text-faang-text-muted/30 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full mt-4 py-4 bg-faang-text text-faang-bg rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
              </button>
              {result && (
                <p className="text-center font-mono text-sm mt-4 text-faang-text">
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
