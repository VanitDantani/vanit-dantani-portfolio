import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'B.E. Computer Engineering',
    institution: 'Government Engineering College Modasa, GTU',
    duration: 'July 2025 – July 2028',
    details: 'In progress',
  },
  {
    title: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic Gandhinagar, GTU',
    duration: 'September 2022 – June 2025',
    details: 'CGPA: 8.44',
  },
  {
    title: '10th Standard',
    institution: 'Mani-Prabhu High School',
    duration: 'May 2022',
    details: '71%',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-faang-text"
        >
          Education
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Gradient Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-faang-accent via-faang-border to-transparent"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 pl-12 md:pl-20 relative group"
            >
              {/* Premium Timeline Dot */}
              <div className="absolute left-[13px] md:left-[29px] top-8 w-3 h-3 bg-faang-bg border-2 border-faang-accent rounded-full group-hover:scale-150 group-hover:bg-faang-accent transition-all duration-300 shadow-[0_0_15px_rgba(0,112,243,0.5)] z-10" />
              
              {/* Content Card */}
              <div className="bento-card p-6 md:p-8 relative overflow-hidden border border-faang-border/50 group-hover:border-faang-accent/30 transition-colors duration-500 shadow-xl">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-faang-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-faang-text mb-2 group-hover:text-faang-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-faang-text-muted/90 mb-6 font-light">
                    {item.institution}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-faang-surface border border-faang-border text-faang-text-muted px-3 py-1.5 rounded-md font-mono text-xs shadow-inner">
                      {item.duration}
                    </span>
                    <span className="text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-faang-accent/10 text-faang-accent border border-faang-accent/20 shadow-[0_0_10px_rgba(0,112,243,0.1)]">
                      {item.details}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
