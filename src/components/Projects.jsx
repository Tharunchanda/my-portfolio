import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "MoodStart",
    description: "A mood-based movie recommendation platform using AI, React, and Node.js.",
    tech: ["React", "Node.js", "Express", "MongoDB", "RAG"],
    github: "https://github.com/yourusername/moodstart",
    live: "https://moodstart.vercel.app",
  },
  {
    title: "HMT-PyTorch",
    description: "A Hierarchical Memory Transformer implementation for memory-based deep learning tasks.",
    tech: ["PyTorch", "Deep Learning", "Transformers"],
    github: "https://github.com/yourusername/hmt-pytorch",
    live: "",
  },
  // Add more as needed
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="bg-white py-16 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-black mb-10"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-300 rounded-xl shadow-md p-6 bg-gray-50 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
