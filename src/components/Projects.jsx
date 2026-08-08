import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    title: 'GTU Coach',
    description: 'A smart study platform where GTU students input their syllabus and past papers, and the system identifies repeated and important questions, allowing users to download them as a PDF.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/VanitDantani/GTU-Coach',
    live: 'https://gtucouch.netlify.app/',
  },
  {
    title: 'Smart Scholarship Management System',
    description: 'A full-stack web app that fully digitizes the scholarship process. Features a dynamic admin dashboard, application workflow, and ML-based eligibility prediction using Logistic Regression, Decision Tree, Random Forest & SVM.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Machine Learning'],
    github: '#',
    live: '#',
  },
  {
    title: 'Developer Portfolio',
    description: 'A personal developer portfolio designed with a modern and premium aesthetic. Built using React and Tailwind CSS for responsive UI, and Framer Motion with tsParticles for smooth scrolling animations and an interactive AI neural network background.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'tsParticles', 'Vite'],
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
              className="h-full"
            >
              <div className="bento-card relative overflow-hidden group flex flex-col border border-faang-border/50 hover:border-faang-accent/40 transition-colors duration-500 shadow-xl h-full">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-faang-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-faang-text group-hover:text-faang-accent transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-faang-bg rounded-full text-faang-text-muted hover:text-faang-accent hover:bg-faang-accent/10 transition-colors border border-faang-border/50 shrink-0 shadow-sm">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-faang-text-muted mb-8 flex-1 text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-faang-surface/60 border border-faang-border/50 text-xs font-mono text-faang-text rounded-md shadow-sm group-hover:border-faang-accent/30 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-5 border-t border-faang-border/30">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-faang-text-muted hover:text-faang-text transition-colors group/link">
                        <Code size={16} className="group-hover/link:text-faang-accent transition-colors" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-faang-text-muted hover:text-faang-text transition-colors group/link">
                        <ExternalLink size={16} className="group-hover/link:text-faang-accent transition-colors" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github === '#' && project.live === '#' && (
                       <span className="text-sm font-mono text-faang-text-muted/60 italic">Confidential / Local Project</span>
                    )}
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
