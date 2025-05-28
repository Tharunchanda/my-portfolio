// src/components/Experience.jsx
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Summer Intern for CMS",
    company: "IIT Mandi",
    duration: "Jun 2025 - Aug 2025",
    details: "Worked on frontend React features and REST APIs integration.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-black mb-8 text-center"
        >
          Internships & Experience
        </motion.h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-gray-800 font-medium">{exp.company}</p>
              <p className="text-gray-500 italic mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
