import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black shadow z-20"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo with subtle hover scale */}
        <motion.h1
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home" className="hover:text-gray-300">Tharun</a>
        </motion.h1>

        {/* Nav links with staggered animation */}
        <motion.ul
          className="flex gap-6 text-gray-300 font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {["home", "about", "experience", "projects", "certifications", "contact"].map((section, idx) => (
            <motion.li
              key={section}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${section}`} className="capitalize hover:text-white transition-colors duration-200">
                {section}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
