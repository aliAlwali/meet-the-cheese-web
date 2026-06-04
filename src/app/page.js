import About from "./components/About";
import Navbar from "./components/Navbar";
import FeaturedBurgers from "./components/FeaturedBurgers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
   <section id="home"className="flex h-[70vh] flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          MEET THE CHEESE
        </h1>

        <p className="max-w-2xl text-xl text-gray-300 mb-8">
          Ajman's Ultimate Cheese Experience
        </p>

        <div className="flex gap-4">
          <button className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300">
            View Menu
          </button>

<a
  href="https://wa.me/971508565521?text=Hello%20Meet%20The%20Cheese,%20I'd%20like%20to%20place%20an%20order."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white px-6 py-3 font-bold hover:bg-white hover:text-black"
>
  Order on WhatsApp
</a>
        </div>
     </section>

{/* Featured Burgers */}
<FeaturedBurgers />
<About />
<Contact />
<Footer />
</main>
  );
}