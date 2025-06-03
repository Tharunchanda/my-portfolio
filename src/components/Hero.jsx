'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hook to rotate text every `delay` ms
function useRotatingText(words, delay = 2500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, delay]);

  return words[index];
}

export default function Hero() {
  const roles = [
    'React Developer',
    'Web Developer',
    'Full Stack Developer',
    'AI/ML Explorer',
    'Tech Enthusiast',
  ];
  const currentRole = useRotatingText(roles, 2500);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white px-6 py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-gradient" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm Tharun
          </motion.h1>

          {/* Rotating Role */}
          <div className="h-8 sm:h-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute text-xl sm:text-2xl text-gray-300 font-medium"
              >
                {currentRole}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-md sm:text-lg text-gray-200 text-justify leading-relaxed"
          >
            I'm <span className="font-semibold text-white">Chanda Tharun</span>, a passionate web developer at the intersection of code and creativity.
            I craft modern, user-friendly applications and explore how AI can elevate them.
            <br /><br />
            Currently diving deep into <span className="text-white font-medium">Deep Learning</span> and building projects that blend full-stack development with intelligent systems.
          </motion.p>

          <motion.blockquote
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 p-5 bg-white text-gray-900 border-l-4 border-gray-700 italic rounded-md shadow-md"
          >
            "Code is like humor. When you have to explain it, it’s bad." – Cory House
          </motion.blockquote>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src="/my-portfolio/profile/Tharun.jpg"
            alt="Portrait of Tharun"
            className="rounded-xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
