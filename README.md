My Portfolio

A personal portfolio website built using React, Vite, Tailwind CSS, and other modern web tools. Showcases my projects, skills, and background.

This repository contains the code for my personal portfolio website.
The goal is to create a clean, responsive, and performant site to present my profile, projects, skills, and contact info. It uses modern frontend tools to enable a smooth developer experience and fast load times.

✨ Features

📱 Mobile responsive design

🎨 Clean UI and UX

🌗 Dark/light mode (if applicable)

📂 Dynamic project list (if you pull from data or CMS)

⚡ Fast development and build times via Vite

🛠 Easy to maintain and extend

🧰 Tech Stack

Framework / Tooling: React + Vite

Styling: Tailwind CSS

Linting / Formatting: ESLint, Prettier (if configured)

Build / Bundling: Vite

Configuration: postcss, tailwind.config.js, vite.config.js

🚀 Getting Started
Prerequisites

Node.js (v14 or higher recommended)

npm or yarn

Installation
git clone https://github.com/Tharunchanda/my-portfolio.git
cd my-portfolio
npm install

Run Locally
npm run dev


This will start the dev server (usually at http://localhost:3000 or as configured). Changes will hot-reload.

Build
npm run build


Generates production-ready build in the dist (or build) folder.

📂 Project Structure
my-portfolio/
├─ public/               # static assets like images, favicon
├─ src/                  # source files
│   ├─ components/       # reusable React components
│   ├─ pages/            # different pages/views
│   ├─ styles/           # Tailwind / CSS / utility styles
│   ├─ assets/           # images, icons, etc.
│   └─ main.jsx          # React entry point
├─ .gitignore
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ README.md

🎨 Customisation

You can easily customise:

Colors, typography etc in tailwind.config.js

Meta tags, titles, SEO related settings in the main HTML / head sections

Projects / content by modifying data files or components where you listed them

Add new pages by creating components/pages and routing them in React (if using routing)

🌍 Deployment

This portfolio can be deployed on platforms like:

GitHub Pages

Any static-site friendly hosting (Netlify, Vercel, etc.)

Typical steps:

Build with npm run build

Upload the dist (or output) folder contents

Configure your domain (optional)

🤝 Contributing

If you want to contribute:

Fork the repo

Create a new branch: git checkout -b feature/your-feature

Make your changes and commit cleanly

Open a Pull Request

📬 Contact

LinkedIn: Chanda Tharun

GitHub: Tharunchanda
