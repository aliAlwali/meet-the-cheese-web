import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-8 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-yellow-400">
        About Us
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/restint.jpg"
            alt="Restaurant Interior"
            width={800}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-3xl font-bold">
            Meet The Cheese
          </h3>

          <p className="mb-4 text-gray-300">
            We serve handcrafted burgers made with premium ingredients,
            fresh beef, and rich melted cheese.
          </p>

          <p className="mb-4 text-gray-300">
            Every burger is prepared with attention to detail,
            delivering a flavor-packed experience that keeps customers
            coming back.
          </p>

          <p className="text-yellow-400 font-bold">
            Fresh • Premium • Loaded With Cheese
          </p>
        </div>

      </div>
    </section>
  );
}