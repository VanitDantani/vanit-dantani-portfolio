import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    duration: 'August 2024 – Present',
    description: 'Designed and developed custom web applications and portfolios for clients. Handled end-to-end project lifecycles from initial UI/UX design to deployment.',
  },
  {
    title: 'Web Development Intern',
    company: 'WayToWeb Pvt. Ltd.',
    duration: 'June 2024 – August 2024',
    description: "Collaborated with the development team on the company's e-commerce website project, contributing to its design and development.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-faang-text"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card p-8 md:p-10 group hover:border-faang-accent/40 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
                
                <div className="w-14 h-14 bg-faang-bg border border-faang-border group-hover:border-faang-accent/50 group-hover:shadow-[0_0_15px_rgba(0,112,243,0.3)] text-faang-text rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Briefcase size={28} className="group-hover:text-faang-accent transition-colors duration-300" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold text-faang-text group-hover:text-faang-accent transition-colors duration-300">{exp.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-faang-bg border border-faang-border text-sm font-mono text-faang-text-muted w-fit shadow-inner">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-mono text-faang-accent mb-4">{exp.company}</h4>
                  <p className="text-faang-text-muted leading-relaxed text-sm md:text-base font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
