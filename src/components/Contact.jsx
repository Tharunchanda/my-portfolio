// src/components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out if you'd like to collaborate, hire me, or just say hello! 😊
        </p>
        <div className="flex justify-center gap-8 text-3xl text-gray-600">
          <a
            href="mailto:b23121@students.iitmandi.ac.in"
            className="hover:text-black transition"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/TharunChanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ChandaTharun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
