// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-r bg-gray-800 z-0" />
      <div className="text-center px-4 z-10 relative">
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Tharun</h2>
        <p className="text-xl">A React Developer & Machine Learning Enthusiast</p>
      </div>
    </section>

  );
}
