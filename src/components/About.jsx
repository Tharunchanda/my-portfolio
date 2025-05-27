export default function About() {
  return (
    <section id="about" className="relative bg-gray-800 text-gray-900 py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-60 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/my-portfolio/profile/Tharun.jpg"
          alt="Tharun's profile"
          className="w-full h-auto rounded-lg shadow-xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black text-center md:text-left tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify text-gray-900">
            I'm <span className="font-semibold text-black">Chanda Tharun</span>, a passionate web developer and machine learning enthusiast. 
            I love building sleek, user-friendly web applications and exploring how intelligent systems work under the hood.
            <br /><br />
            I'm currently studying Deep Learning, exploring full-stack development, and working on exciting personal projects that merge AI with real-world applications.
          </p>

          <div className="mt-8 p-5 bg-white border-l-6 border-gray-700 text-gray-900 italic rounded-lg shadow-md max-w-md">
            "Code is like humor. When you have to explain it, it’s bad." – Cory House
          </div>
        </div>
      </div>
    </section>
  );
}
