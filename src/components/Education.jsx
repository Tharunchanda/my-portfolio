import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for dots
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.3, type: "spring", stiffness: 300, damping: 20 },
    }),
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-br from-gray-600 via-gray-900 to-gray-600 text-gray-900 px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Academic Background</h2>

        {/* Timeline container */}
        <div className="relative pl-8 sm:pl-12" ref={ref}>
          {/* Animated Vertical line */}
          <motion.div
            className="absolute left-4 sm:left-6 top-0 w-1 bg-gradient-to-b from-gray-300 via-gray-600 to-gray-900 rounded-full"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />

          {/* IIT Mandi */}
          <div className="relative mb-12">
            <motion.div
              className="absolute -left-7 sm:-left-9 top-2 w-5 h-5 bg-gray-300 border-4 border-white rounded-full shadow-lg animate-bounce"
              custom={0}
              variants={dotVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
            <div className="bg-gray-800 hover:bg-gray-900 p-6 rounded-lg shadow-md ml-6 sm:ml-10">
              <h3 className="text-xl font-semibold text-gray-100">
                Indian Institute of Technology Mandi
              </h3>
              <p className="text-gray-200 mt-2">
                <strong>B.Tech in Computer Science and Engineering</strong> <br />
                July 2023 – Present <br />
                <span className="text-gray-300">CGPA: 7.88 / 10.0</span>
                <br />
                <span className="italic text-gray-300">
                  Key Courses: Data Structures, Algorithms, Artificial Intelligence, Web Technologies, DBMS
                </span>
              </p>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="relative mb-12">
            <motion.div
              className="absolute -left-7 sm:-left-9 top-2 w-5 h-5 bg-gray-600 border-4 border-white rounded-full shadow-lg animate-bounce"
              custom={1}
              variants={dotVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
            <div className="bg-gray-800 hover:bg-gray-900 p-6 rounded-lg shadow-md ml-6 sm:ml-10">
              <h3 className="text-xl font-semibold text-gray-100">
                Sri Chaitanya Junior College, Hyderabad
              </h3>
              <p className="text-gray-200 mt-2">
                <strong>Higher Secondary Education (Class XI & XII)</strong> <br />
                July 2021 – July 2023 <br />
                <span className="text-gray-300">Percentage: 98.6%</span>
              </p>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="relative">
            <motion.div
              className="absolute -left-7 sm:-left-9 top-2 w-5 h-5 bg-gray-900 border-4 border-white rounded-full shadow-lg animate-bounce"
              custom={2}
              variants={dotVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
            <div className="bg-gray-800 hover:bg-gray-900 p-6 rounded-lg shadow-md ml-6 sm:ml-10">
              <h3 className="text-xl font-semibold text-gray-100">
                Narayana CO - Olympiad School, Hyderabad
              </h3>
              <p className="text-gray-200 mt-2">
                <strong>Secondary Education (Class X)</strong> <br />
                May 2021 <br />
                <span className="text-gray-300">Percentage: 100%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
