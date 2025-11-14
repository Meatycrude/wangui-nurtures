// src/components/Gallery.tsx
import Image from "next/image";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Group therapy circle" },
  { src: "/images/gallery-2.jpg", alt: "Mindfulness workshop" },
  { src: "/images/gallery-3.jpg", alt: "One-on-one session" },
  { src: "/images/gallery-4.jpg", alt: "Community outreach" },
  { src: "/images/gallery-5.jpg", alt: "Relaxation corner" },
  { src: "/images/gallery-6.jpg", alt: "Team celebration" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900">
          Moments of Healing
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Real glimpses into the safe, supportive spaces we create.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhPZwAJJAPr6QAAAABJRU5ErkJggg=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
