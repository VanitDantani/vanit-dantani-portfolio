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
    <section id="education" className="section-padding bg-apple-gray">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-black/10 ml-4 md:ml-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 pl-8 relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-apple-blue rounded-full -left-[6.5px] top-2 transition-transform group-hover:scale-150" />
              
              <h3 className="text-2xl font-semibold text-apple-dark mb-1">{item.title}</h3>
              <div className="text-lg text-apple-text-light mb-2">{item.institution}</div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <span className="bg-white px-3 py-1 rounded-full border border-black/5 shadow-sm">
                  {item.duration}
                </span>
                <span className="text-apple-blue">
                  {item.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
