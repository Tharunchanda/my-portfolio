export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white"><a href="#home" className="hover:text-gray-300">Tharun</a></h1>
        <ul className="flex gap-6 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        </div>
    </nav>
  );
}
