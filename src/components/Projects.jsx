import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsData = [
  
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
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
              className="flex flex-col bg-apple-gray rounded-3xl overflow-hidden border border-black/5 hover:shadow-xl transition-all group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-gray-400 font-medium">[Image Placeholder]</span>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-apple-dark mb-3">{project.title}</h3>
                <p className="text-apple-text-light mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-xs font-semibold text-apple-text rounded-full shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-apple-blue transition-colors">
                    <Code size={18} />
                    <span>[GitHub]</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-semibold hover:text-apple-blue transition-colors">
                    <ExternalLink size={18} />
                    <span>[Live Demo]</span>
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
