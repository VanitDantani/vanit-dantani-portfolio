import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-apple-gray flex-shrink-0 flex items-center justify-center overflow-hidden border border-black/5 shadow-inner">
            <img 
              src="/profile.jpg" 
              alt="Vanit Dantani" 
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-lg text-apple-text leading-relaxed">
              I'm Vanit Dantani, a Computer Engineering student pursuing my B.E. at Government Engineering College Modasa, with a Diploma in Computer Engineering from Government Polytechnic Gandhinagar. My journey began with web development through an internship at WayToWeb Pvt. Ltd., and I'm now working toward becoming an AI Engineer, drawn to building systems that solve real problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/5">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-apple-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-apple-dark">Currently pursuing</h4>
                  <p className="text-sm text-apple-text-light mt-1">
                    B.E. in Computer Engineering<br />
                    Government Engineering College Modasa (GTU)<br />
                    July 2025 – July 2028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-apple-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-apple-dark">Location</h4>
                  <p className="text-sm text-apple-text-light mt-1">Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
