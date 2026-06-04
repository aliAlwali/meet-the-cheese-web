export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 py-20 bg-black"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-yellow-400">
        Contact Us
      </h2>

      <div className="mx-auto max-w-4xl rounded-2xl bg-zinc-900 p-10 text-center">

        <h3 className="mb-4 text-3xl font-bold">
          Meet The Cheese
        </h3>

        <p className="mb-2 text-gray-300">
          📍 Ajman, United Arab Emirates
        </p>

        <p className="mb-2 text-gray-300">
          📞 +971 50 856 5521
        </p>

        <p className="mb-6 text-gray-300">
          🕒 Open Daily: 12 PM - 12 AM
        </p>

<a
  href="https://wa.me/971508565521?text=Hello%20Meet%20The%20Cheese,%20I'd%20like%20to%20place%20an%20order."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
>
  Order on WhatsApp
</a>

      </div>
    </section>
  );
}