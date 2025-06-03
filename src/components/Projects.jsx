import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "MoodStart",
    description: "A mood-based movie recommendation platform using AI, React, and Node.js.",
    tech: ["React", "Node.js", "Express", "MongoDB", "RAG"],
    github: "https://github.com/yourusername/moodstart",
    live: "https://moodstart.vercel.app",
    image: "/images/moodstart.png",
  },
  {
    title: "HMT-PyTorch",
    description: "A Hierarchical Memory Transformer implementation for memory-based deep learning tasks.",
    tech: ["PyTorch", "Deep Learning", "Transformers"],
    github: "https://github.com/yourusername/hmt-pytorch",
    live: "",
    image: "/images/hmt-pytorch.png",
  },
  {
    title: "DevTracker",
    description: "A productivity tracker for developers with analytics dashboard and task scheduling.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/yourusername/devtracker",
    live: "https://devtracker.vercel.app",
    image: "/images/devtracker.png",
  },
  {
    title: "AI Resume Builder",
    description: "Generate optimized resumes using GPT and export in multiple formats.",
    tech: ["React", "GPT-4", "TailwindCSS"],
    github: "https://github.com/yourusername/ai-resume",
    live: "https://airesume.vercel.app",
    image: "/images/ai-resume.png",
  },
  {
    title: "Code Collab",
    description: "Real-time collaborative code editor with chat support and version control.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/yourusername/code-collab",
    live: "https://codecollab.vercel.app",
    image: "/images/code-collab.png",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };
  

  return (
    <section id="projects" className="bg-white py-16 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-black mb-10"
        >
          Projects
        </motion.h2>

        {/* Left / Right Buttons */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-10"
        >
          ◀
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-10"
        >
          ▶
        </button>

        {/* Scrollable Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto hide-scrollbar"
          ref={scrollRef}
        >
          <motion.div
            className="flex space-x-6"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.1}
          >
            {projects.map((proj, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[360px] flex-shrink-0 border border-gray-200 rounded-xl shadow-md bg-white overflow-hidden"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{proj.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                      >
                        View Project
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
