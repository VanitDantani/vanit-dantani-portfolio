import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [ 'JavaScript', 'Python', 'Java'],
  },
  {
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Databases',
    skills: ['Git/GitHub', 'MySQL', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-apple-gray border border-black/5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-apple-dark mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-apple-text shadow-sm border border-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
