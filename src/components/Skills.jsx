import React from "react";

const skills = [
  // Programming Languages
  { name: "C", icon: "/my-portfolio/icons/c.svg" },
  { name: "C++", icon: "/my-portfolio/icons/cplusplus.svg" },
  { name: "Python", icon: "/my-portfolio/icons/python.svg" },
  { name: "JavaScript", icon: "/my-portfolio/icons/javascript.svg" },

  // Web Development
  { name: "HTML", icon: "/my-portfolio/icons/html5.svg" },
  { name: "CSS", icon: "/my-portfolio/icons/css.svg" },
  { name: "Tailwind CSS", icon: "/my-portfolio/icons/tailwindcss.svg" },

  // Frameworks & Libraries
  { name: "React", icon: "/my-portfolio/icons/react.svg" },
  { name: "Node.js", icon: "/my-portfolio/icons/nodedotjs.svg" },
  { name: "Express.js", icon: "/my-portfolio/icons/express.svg" },
  { name: "Next.js", icon: "/my-portfolio/icons/nextdotjs.svg" },
  { name: "Django", icon: "/my-portfolio/icons/django.svg" },
  { name: "TensorFlow", icon: "/my-portfolio/icons/tensorflow.svg" },
  { name: "PyTorch", icon: "/my-portfolio/icons/pytorch.svg" },

  // Databases
  { name: "MySQL", icon: "/my-portfolio/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/my-portfolio/icons/postgresql.svg" },

  // Tools & Platforms
  { name: "Material UI", icon: "/my-portfolio/icons/mui.svg" },
  { name: "Git", icon: "/my-portfolio/icons/git.svg" },
  { name: "GitHub", icon: "/my-portfolio/icons/github.svg" },
  { name: "Jupyter Notebook", icon: "/my-portfolio/icons/jupyter.svg" },
  { name: "Docker", icon: "/my-portfolio/icons/docker.svg" },
  { name: "Linux", icon: "/my-portfolio/icons/linux.svg" },
];

// Duplicate for infinite scroll
const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 py-10">
      <div className="relative h-[120px] w-full">
        <div className="flex gap-10 whitespace-nowrap w-max animate-scroll-slow">
          {duplicatedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-[120px] text-gray-400 cursor-default select-none"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2 "
                loading="lazy"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
