'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white px-6 py-20">
      {/* Background gradient animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-gradient" />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile image */}
        <motion.img
          src="/my-portfolio/profile/Tharun.jpg"
          alt="Tharun's profile"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full h-auto rounded-xl shadow-2xl object-cover height-[400px] sm:height-[500px] md:height-[60px] lg:height-[700px] xl:height-[800px] mx-auto"
        />

        {/* Right: Text content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Hi, I'm Tharun
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-300 font-medium"
          >
            A React Developer & Machine Learning Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-md sm:text-lg text-gray-200 text-justify"
          >
            I'm <span className="font-semibold text-white">Chanda Tharun</span>, a passionate web developer who thrives at the intersection of code and creativity.
            I build modern, user-friendly web applications and explore how AI can make them even smarter.
            <br /><br />
            Currently, I’m deep diving into <span className="text-white font-medium">Deep Learning</span> and crafting projects that blend full-stack development with intelligent systems.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 p-5 bg-white text-gray-900 border-l-4 border-gray-700 italic rounded-md shadow-md"
          >
            "Code is like humor. When you have to explain it, it’s bad." – Cory House
          </motion.div>
        </div>
      </div>
    </section>
  );
}
