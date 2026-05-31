export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        Meet The Cheese
      </h2>

      <div className="flex gap-6">
        <a href="#" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400">
          Menu
        </a>
        <a href="#" className="hover:text-yellow-400">
          About
        </a>
        <a href="#" className="hover:text-yellow-400">
          Contact
        </a>
      </div>
    </nav>
  );
}