import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    title: 'GTU Coach',
    description: 'A precision study planner for GTU students. Analyzes past papers to identify high-yield topics, repeating questions, and weightage shifts. Built to optimize study time using data-driven insights.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/VanitDantani/GTU-Coach',
    live: '#',
  },
  {
    title: 'Student Management System (SMS)',
    description: 'A comprehensive management system for tracking student records, grades, and attendance. Features a robust backend architecture for handling complex relational data and role-based access.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/VanitDantani',
    live: '#',
  },
  {
    title: 'Developer Portfolio',
    description: 'A modern, high-performance developer portfolio built with a FAANG-inspired minimalist aesthetic. Features an interactive AI neural network background and smooth scroll physics.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'tsParticles'],
    github: 'https://github.com/VanitDantani/vanit-dantani-portfolio',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card flex flex-col group"
            >
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-faang-text mb-3">{project.title}</h3>
                <p className="text-faang-text-muted mb-6 flex-1 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-faang-bg border border-faang-border text-xs font-mono text-faang-text rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-faang-border/50">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-mono text-faang-text-muted hover:text-faang-text transition-colors">
                    <Code size={16} />
                    <span>Source</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-mono text-faang-text-muted hover:text-faang-text transition-colors">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
