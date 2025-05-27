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
  return (
    <section id="projects" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
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
                    className="text-gray-800 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
