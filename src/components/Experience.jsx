import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-apple-gray">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 bg-blue-50 text-apple-blue rounded-2xl flex items-center justify-center flex-shrink-0">
              <Briefcase size={28} />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-apple-dark">Web Development Intern</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-apple-gray text-sm font-medium text-apple-text-light w-fit">
                  June 2024 – August 2024
                </span>
              </div>
              <h4 className="text-lg font-medium text-apple-blue mb-4">WayToWeb Pvt. Ltd.</h4>
              <p className="text-apple-text-light leading-relaxed">
                Collaborated with the development team on the company's e-commerce website project, contributing to its design and development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
