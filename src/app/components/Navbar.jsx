export default function Navbar() {
  return (
<nav className="sticky top-0 z-50 flex items-center justify-between bg-black/95 backdrop-blur px-4 py-4 md:px-8 md:py-6">     
<h2 className="text-lg md:text-2xl font-bold text-yellow-400">        Meet The Cheese
      </h2>

<div className="flex gap-3 md:gap-6 text-sm md:text-base">        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#menu" className="hover:text-yellow-400">
          Menu
        </a>
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>      

      </div>
    </nav>
  );
}