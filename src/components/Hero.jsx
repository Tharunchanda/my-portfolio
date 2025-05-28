import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />

      {/* Blur overlay for depth */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Hero Text Content */}
      <div className="z-10 relative text-center px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          Hi, I'm Tharun
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-gray-200"
        >
          A React Developer & Machine Learning Enthusiast
        </motion.p>
      </div>
    </section>
  );
}
