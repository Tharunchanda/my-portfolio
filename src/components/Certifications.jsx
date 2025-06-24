import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const certifications = {
  coursera: [
    { title: "AI Essentials", year: 2023, img: "/my-portfolio/certificates/ai_essentials.jpg" },
    { title: "Crash course on python", year: 2023, img: "/my-portfolio/certificates/crash_course_on_python.jpg" },
    { title: "Project Management", year: 2023, img: "/my-portfolio/certificates/project_management.jpg" },
    { title: "Version Control", year: 2023, img: "/my-portfolio/certificates/version_control.jpg" },
    { title: "Introduction to Front-End Development", year: 2023, img: "/my-portfolio/certificates/intro_to_Front_End.jpg" },
  ],
  achievement: [
    { title: "NASA International space apps challenge", year: 2024, img: "/my-portfolio/certificates/NASA_1st_prize_certificate.jpg" },
    { title: "ATF", year: 2024, img: "/my-portfolio/certificates/atf.png" },
  ],
  pors: [
    { title: "Planning and Management Head Xpecto'25", year: 2025, img: "/my-portfolio/certificates/pnm_head.jpg" },
    { title: "SNTC Core Team Member", year: 2024, img: "/my-portfolio/certificates/Tharun_Chanda.png" },
    { title: "STAC Core Team Member", year: 2024, img: "/my-portfolio/certificates/Stac_Chanda_Tharun.png" },
  ],
  cop: [
    { title: "Flipkart Grid 6.O", year: 2024, img: "/my-portfolio/certificates/Flipkart_Grid_6.jpg" },
    { title: "NASA International space apps challenge", year: 2024, img: "/my-portfolio/certificates/NASA_Space_Apps_Challenge.jpg" },
    { title: "Tata Imagination Challenge", year: 2024, img: "/my-portfolio/certificates/tata.png" },
  ],
  more: [
    { title: "JP Morgan Software Job simulation", year: 2023, img: "/my-portfolio/certificates/JP_Morgan_certificate.jpg" },
    { title: "Python for ML", year: 2023, img: "/my-portfolio/certificates/ML_by_Great_Learning.jpg" },
    { title: "Certificate of excellence", year: 2025, img: "/my-portfolio/certificates/coe.png" },
  ],
};

export default function Certifications() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabLabels = ["Coursera", "Achievements", "POR's", "COP's", "More..."];
  const certData = [
    certifications.coursera,
    certifications.achievement,
    certifications.pors,
    certifications.cop,
    certifications.more,
  ];

  return (
    <motion.section
      id="certifications"
      className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Certifications</h2>

        <Box className="mb-6 justify-around flex">
          <Tabs
            value={tabIndex}
            onChange={(e, newValue) => setTabIndex(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#9ca3af", // Tailwind's gray-400
                height: "3px",
              },
            }}
          >
            {tabLabels.map((label, index) => (
              <Tab
                key={index}
                label={label}
                className="text-gray-400 hover:text-white transition-colors"
              />
            ))}
          </Tabs>
        </Box>

        {certData.map((certs, index) => (
          <TabPanel key={index} value={tabIndex} index={index}>
            <CertificationList certs={certs} onImageClick={setSelectedImage} />
          </TabPanel>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-transparent bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative max-w-3xl w-full p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-3xl hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Certificate enlarged"
                className="w-full max-h-[80vh] object-contain rounded-md shadow-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function TabPanel({ children, value, index }) {
  return value === index ? (
    <Box sx={{ py: 2 }}>
      {children}
    </Box>
  ) : null;
}

function CertificationList({ certs, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certs.map((c, i) => (
        <motion.div
          key={i}
          className="relative group border border-gray-700 overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.04] transition-all duration-300 cursor-pointer"
          onClick={() => onImageClick(c.img)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onImageClick(c.img);
            }
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          aria-label={`View ${c.title}, ${c.year}`}
        >
          <img
            src={c.img}
            alt={`Certificate: ${c.title}, ${c.year}`}
            className="w-full h-48 object-contain grayscale group-hover:grayscale-0 transition duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-transparent backdrop-blur-md bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300">
            <h3 className="text-lg font-semibold text-gray-600">{c.title}</h3>
            <p className="text-gray-400 mt-1">{c.year}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
