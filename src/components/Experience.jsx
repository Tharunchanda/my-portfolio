import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Summer Intern for Course Management System",
    company: "IIT Mandi",
    duration: "Jun 2025 - Aug 2025",
    details: "Worked on frontend React features and REST APIs integration.",
    github: "https://github.com/Tharunchanda/CMS-Frontend",
    live: "",
    image: "/my-portfolio/images/cms.jpg", // Add your image path here
  },
  // Add more experiences here with github/live/image if needed
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white py-16 px-6"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-10 text-center"
        >
          Internships & Experience
        </motion.h2>

        <div className="bg-gray-800 space-y-6 max-w-3xl mx-auto rounded-xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-[2px] rounded-xl bg-transparent hover:bg-gray-900 transition duration-300 shadow-lg"
            >
              <div className="rounded-[10px] p-6 backdrop-blur-md shadow-sm hover:shadow-md transition duration-300 flex flex-col md:flex-row gap-6">
                {exp.image && (
                  <img
                    src={exp.image}
                    alt={`${exp.role} at ${exp.company}`}
                    className="w-full md:w-100 h-auto object-contain rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-100">{exp.role}</h3>
                    <p className="text-gray-200 font-medium">{exp.company}</p>
                    <p className="text-gray-300 italic mb-2">{exp.duration}</p>
                    <p className="text-gray-400 mb-4">{exp.details}</p>
                  </div>

                  <div className="flex gap-3">
                    {exp.live && (
                      <a
                        href={exp.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
                      >
                        View Project
                      </a>
                    )}
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
                      >
                        View Code
                      </a>
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
