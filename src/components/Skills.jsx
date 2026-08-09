import { motion } from 'framer-motion';
import { Code2, Layers, Database } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-7 h-7 text-faang-accent" />,
    skills: [ 'JavaScript', 'Python', 'Java'],
  },
  {
    category: 'Web Development',
    icon: <Layers className="w-7 h-7 text-faang-accent" />,
    skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express.js'],
  },
  {
    category: 'Tools & Databases',
    icon: <Database className="w-7 h-7 text-faang-accent" />,
    skills: ['Git/GitHub', 'MySQL', 'MongoDB', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-faang-text"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card p-8 group relative overflow-hidden flex flex-col h-full border border-faang-border/50 hover:border-faang-accent/40 transition-colors duration-500 shadow-xl"
            >
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-faang-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 flex-1">
                <div className="bg-faang-bg inline-flex p-4 rounded-2xl border border-faang-border shadow-inner mb-8 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,112,243,0.4)] transition-all duration-300">
                  {group.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-faang-text mb-8 group-hover:text-faang-accent transition-colors duration-300 tracking-tight">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {group.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-4 py-2 bg-faang-surface/60 rounded-lg text-sm font-mono text-faang-text-muted border border-faang-border/50 hover:bg-faang-bg hover:text-faang-text hover:border-faang-accent/60 hover:shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
