'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-gray-800 text-gray-900 py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-60 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/my-portfolio/profile/Tharun.jpg"
          alt="Tharun's profile"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-auto rounded-lg shadow-xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-black text-center md:text-left tracking-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed text-justify text-gray-900"
          >
            I'm <span className="font-semibold text-black">Chanda Tharun</span>, a passionate web developer and machine learning enthusiast.
            I love building sleek, user-friendly web applications and exploring how intelligent systems work under the hood.
            <br /><br />
            I'm currently studying Deep Learning, exploring full-stack development, and working on exciting personal projects that merge AI with real-world applications.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-5 bg-white border-l-6 border-gray-700 text-gray-900 italic rounded-lg shadow-md max-w-md"
          >
            "Code is like humor. When you have to explain it, it’s bad." – Cory House
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
