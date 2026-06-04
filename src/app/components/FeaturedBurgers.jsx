import Image from "next/image";

export default function FeaturedBurgers() {
  return (
    <section id="menu" className="px-8 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold text-yellow-400">
        Featured Burgers
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

<div className="rounded-2xl bg-zinc-900 overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">          <Image
            src="/images/burger1.jpg"
            alt="Cheese Monster"
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />

          <div className="p-6">
            <h3 className="mb-2 text-2xl font-bold">
              Cheese Monster
            </h3>

            <p className="text-gray-400">
              Double beef, melted cheese and special sauce.
            </p>
            <p className="text-xl font-bold text-yellow-400">
  AED 32
</p>
<a
  href="https://wa.me/971508565521?text=Hello%20Meet%20The%20Cheese,%20I'd%20like%20to%20order%20the%20Cheese%20Monster."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block w-full rounded-lg bg-yellow-400 py-3 text-center font-bold text-black hover:bg-yellow-300"
>
  Order Now
</a>
          </div>
        </div>
<div className="rounded-2xl bg-zinc-900 overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">  <Image
    src="/images/burger2.jpg"
    alt="Triple Melt"
    width={500}
    height={300}
    className="w-full h-60 object-cover"
  />

  <div className="p-6">
    <h3 className="mb-2 text-2xl font-bold">
      Triple Melt
    </h3>

    <p className="text-gray-400">
      Triple cheese layers with premium beef.
    </p>
      <p className="text-xl font-bold text-yellow-400">
  AED 29
</p>
<a
  href="https://wa.me/971508565521?text=Hello%20Meet%20The%20Cheese,%20I'd%20like%20to%20order%20the%20Triple%20Melt."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block w-full rounded-lg bg-yellow-400 py-3 text-center font-bold text-black hover:bg-yellow-300"
>
  Order Now
</a>
  </div>
</div>

<div className="rounded-2xl bg-zinc-900 overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">  <Image
    src="/images/burger3.jpg"
    alt="BBQ Cheese"
    width={500}
    height={300}
    className="w-full h-60 object-cover"
  />

  <div className="p-6">
    <h3 className="mb-2 text-2xl font-bold">
      BBQ Cheese
    </h3>

    <p className="text-gray-400">
      Smoky BBQ sauce and extra cheddar.
    </p>
      <p className="text-xl font-bold text-yellow-400">
  AED 35
</p>
<a
  href="https://wa.me/971508565521?text=Hello%20Meet%20The%20Cheese,%20I'd%20like%20to%20order%20the%20BBQ%20Cheese."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 block w-full rounded-lg bg-yellow-400 py-3 text-center font-bold text-black hover:bg-yellow-300"
>
  Order Now
</a>
  </div>
</div>

      </div>
    </section>
  );
}