import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-16 text-center text-faang-text">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Profile Photo Card */}
          <div className="lg:col-span-4 bento-card p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-faang-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Circular Image Container */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden relative z-10 shadow-2xl border-4 border-faang-border group-hover:border-faang-accent/50 transition-colors duration-500 bg-faang-surface flex items-center justify-center">
              <span className="text-faang-text-muted font-mono text-sm">Photo coming soon</span>
            </div>
          </div>

          {/* Text Content Card */}
          <div className="lg:col-span-8 bento-card p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-faang-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-faang-accent/20 transition-colors duration-700"></div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-faang-text mb-6 tracking-tight">
              Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-faang-accent to-purple-500">Vanit Dantani</span>
            </h3>
            
            <p className="text-lg md:text-xl text-faang-text-muted leading-relaxed mb-12 font-display tracking-wide font-light">
              A Computer Engineering student pursuing my B.E. at Government Engineering College Modasa, with a Diploma in Computer Engineering from Government Polytechnic Gandhinagar. My journey began with web development through an internship at WayToWeb Pvt. Ltd., and I'm now working toward becoming an AI Engineer, drawn to building systems that solve real problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              {/* Education Mini Card */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-faang-bg border border-faang-border hover:border-faang-accent/50 transition-colors shadow-inner">
                <GraduationCap className="w-6 h-6 text-faang-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-faang-text text-sm mb-2">Education</h4>
                  <p className="text-xs text-faang-text-muted font-mono leading-relaxed">
                    B.E. Computer Engineering<br />
                    GEC Modasa (GTU)<br />
                    July 2025 – July 2028
                  </p>
                </div>
              </div>

              {/* Location Mini Card */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-faang-bg border border-faang-border hover:border-faang-accent/50 transition-colors shadow-inner">
                <MapPin className="w-6 h-6 text-faang-accent flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-faang-text text-sm mb-2">Location</h4>
                  <p className="text-xs text-faang-text-muted font-mono leading-relaxed">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
