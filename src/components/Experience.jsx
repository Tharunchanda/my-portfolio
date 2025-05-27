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
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Internships & Experience
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-md p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-gray-800 font-medium">{exp.company}</p>
              <p className="text-gray-500 italic mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
