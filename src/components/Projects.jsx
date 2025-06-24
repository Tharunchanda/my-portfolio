import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Book Store Application",
    description: "Full-stack MERN book store with secure role-based access (Admin, Editor, Customer), JWT auth, and responsive dashboard for inventory and user management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Tharunchanda/BookStore-App",
    live: "https://book-store-app-three-pink.vercel.app/",
    image: "/my-portfolio/images/bookstore.png",
  },
  {
    title: "Project Kavtan – NASA Space Hackathon",
    description: "Emission analysis platform with heatmaps and ML models using NASA and space datasets. R² score of 0.98 with Random Forest regression.",
    tech: ["React", "Next.js", "Flask", "Scipy", "Folium"],
    github: "https://github.com/Vinamra-21/Nasa-Spaceapps-Challenge",
    live: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/kavtan/?tab=details",
    ppt: "https://www.canva.com/design/DAGSyQUHg0k/UVYSVPvMwbNp-68wm1NxRg/edit?utm_content=DAGSyQUHg0k&amp;utm_campaign=designshare&amp;utm_medium=link2&amp;utm_source=sharebutton",
    video: "https://drive.google.com/file/d/18B8eQxgfFP9h_bp5nOg0n33oPbRNErrF/view",
    image: "/my-portfolio/images/kavtan.png",
  },
  {
    title: "Modified HMT-PyTorch",
    description: "Hierarchical Memory Transformer implementation in PyTorch for memory-intensive deep learning tasks with multi-scale context handling.",
    tech: ["PyTorch", "Deep Learning", "Transformers"],
    github: "https://github.com/Tharunchanda/HMT-pytorch-modified",
    live: "",
    image: "/my-portfolio/images/hmt.png",
  },
  {
    title: "MoodStart",
    description: "A mood-based movie recommendation platform using AI with smart questionnaires, movie metadata, and a RAG-based recommendation engine.",
    tech: ["React", "Node.js", "Express", "MongoDB", "RAG"],
    github: "https://github.com/yourusername/moodstart",
    ppt: "https://drive.google.com/file/d/1d-oboCoBcGT08_Wiw_owCGdl1ZQahtxO/view?usp=sharing",
    video: "https://drive.google.com/file/d/1DDKNv2okCC3EurKk7abtepxz4g6wuBLI/view?usp=sharing",
    image: "/my-portfolio/images/moodstart.png",
  },
  {
    title: "Digital Destroyers AI-ML Hackathon 2024",
    description: "Digital Destroyers AI-ML Hackathon 2024 project focused on advanced AI solutions for real-world problems, showcasing innovative use of machine learning techniques.",
    tech: ["Python", "Machine Learning", "AI"],
    github: "https://github.com/Tharunchanda/Digital_Destroyers_AI-ML-Hackthon-24",
    video: "https://www.youtube.com/watch?v=FmdDAHWJNh4",
    image: "/my-portfolio/images/aiml.png",
  },
  {
    title: "MERN Authentication System",
    description: "End-to-end authentication system with OTP-based email verification, JWT tokens, and password reset. Built using MERN stack with Tailwind UI.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Tharunchanda/MERN-Auth/tree/main",
    live: "",
    image: "/my-portfolio/images/auth.png",
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
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-600 via-gray-900 to-gray-600 py-10 px-2 sm:py-16 sm:px-4 md:px-6 relative "
      ref={ref}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Scroll buttons */}
        {/* <button
          aria-label="Scroll left"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 backdrop-blur-sm bg-transparent text-black border border-gray-300 shadow p-2 rounded-2xl z-10 hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 backdrop-blur-sm bg-transparent text-black border border-gray-300 shadow p-2 rounded-2xl z-10 hover:bg-gray-100"
        >
          ▶
        </button> */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-300 mb-6 sm:mb-10"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="overflow-x-auto hide-scrollbar px-0 sm:px-2 md:px-0"
          ref={scrollRef}
        >
          <motion.div className="flex space-x-3 sm:space-x-4 md:space-x-6">
            {projects.map((proj) => (
              <motion.div
                key={proj.title.replace(/\s+/g, '-').toLowerCase()}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="min-w-[85vw] max-w-[90vw] sm:min-w-[300px] sm:max-w-[360px] md:w-[360px] flex-shrink-0 border border-gray-700 rounded-xl shadow-md bg-white overflow-hidden"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 sm:h-55 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-black mb-1">{proj.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-800 text-[10px] sm:text-xs px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-800"
                      >
                        View Project
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-black"
                      >
                        View Code
                      </a>
                    )}
                    {proj.ppt && (
                      <a
                        href={proj.ppt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-900"
                      >
                        View Ppt
                      </a>
                    )}
                    {proj.video && (
                      <a
                        href={proj.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-900"
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
