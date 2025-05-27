import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const certifications = {
  coursera: [
    { title: "AI Essentials", year: 2023, img: "/certificates/ai_essentials.jpg" },
    { title: "Crash course on python", year: 2023, img: "/certificates/carsh_course_on_python.jpg" },
    { title: "Project Management", year: 2023, img: "/certificates/project_management.jpg" },
    { title: "Version Control", year: 2023, img: "/certificates/version_control.jpg" },
    { title: "Introduction to Front-End Development", year: 2023, img: "/certificates/intro_to_Front_End.jpg" },
  ],
  achievement: [
    { title: "NASA International space apps challenge", year: 2024, img: "/certificates/NASA_1st_prize_certificate.jpg" },
  ],
  pors: [
    { title: "Planning and Management Head Xpecto'25", year: 2025, img: "/certificates/pnm_head.jpg" },
    { title: "SNTC Core Team Member", year: 2024, img: "/certificates/Tharun_Chanda.png" },
    { title: "STAC Core Team Member", year: 2024, img: "/certificates/Stac_Chanda_Tharun.png" },
  ],
  cop: [
    { title: "Flipkart Grid 6.O", year: 2024, img: "/certificates/Flipkart_Grid_6.jpg" },
    { title: "NASA International space apps challenge", year: 2024, img: "/certificates/NASA_Space_Apps_Challenge.jpg" },
  ],
  more: [
    { title: "JP Morgan Software Job simulation", year: 2023, img: "/certificates/JP_Morgan_certificate.jpg" },
    { title: "Python for ML", year: 2023, img: "/certificates/ML_by_Great_Learning.jpg" },
  ],
};

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Certifications</h2>

        <Tabs>
          <TabList className="flex justify-center gap-8 mb-6 border-b-2 border-gray-700">
            {["Coursera", "Achievements", "POR's", "COP's", "More..."].map((tabName, idx) => (
              <Tab
                key={idx}
                className="
                  cursor-pointer py-2 px-4 text-lg 
                  text-gray-400 hover:text-white focus:outline-none 
                  focus:ring-2 focus:ring-gray-500 rounded
                  selected:text-white selected:border-b-4 selected:border-gray-500
                  transition-colors duration-300
                "
                selectedClassName="text-white border-b-4 border-gray-500"
                aria-selected={false}
                role="tab"
              >
                {tabName}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <CertificationList certs={certifications.coursera} onImageClick={setSelectedImage} />
          </TabPanel>
          <TabPanel>
            <CertificationList certs={certifications.achievement} onImageClick={setSelectedImage} />
          </TabPanel>
          <TabPanel>
            <CertificationList certs={certifications.pors} onImageClick={setSelectedImage} />
          </TabPanel>
          <TabPanel>
            <CertificationList certs={certifications.cop} onImageClick={setSelectedImage} />
          </TabPanel>
          <TabPanel>
            <CertificationList certs={certifications.more} onImageClick={setSelectedImage} />
          </TabPanel>
        </Tabs>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
        className="fixed inset-0 bg-transparent backdrop-blur-md flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
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
        </div>
      )}
    </section>
  );
}

function CertificationList({ certs, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {certs.map((c, i) => (
        <div
          key={i}
          className="
            relative group border border-gray-700 overflow-hidden shadow-md
            hover:shadow-xl transform hover:scale-[1.04] transition-all duration-300 cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-gray-500
          "
          onClick={() => onImageClick(c.img)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onImageClick(c.img);
            }
          }}
          aria-label={`View details for certification ${c.title}, issued in ${c.year}`}
        >
          <img
            src={c.img}
            alt={`${c.title} certificate`}
            className="w-full h-48 object-contain grayscale group-hover:grayscale-0 transition duration-300"
            loading="lazy"
          />

          <div
            className="
              absolute inset-0 bg-transparent backdrop-blur-md bg-opacity-75
              opacity-0 group-hover:opacity-100
              flex flex-col justify-center items-center text-center
              px-4 transition-opacity duration-300
            "
          >
            <h3 className="text-lg font-semibold text-gray-600">{c.title}</h3>
            <p className="text-gray-400 mt-1">{c.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
