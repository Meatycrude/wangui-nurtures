// src/components/Hero.tsx
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-indigo-50 py-24 md:py-32 overflow-hidden">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Leaf className="h-12 w-12 text-emerald-600 animate-pulse" />
        </div>

        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Nurturing Minds, <br className="hidden md:block" />
          Healing Hearts
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Wangui offers compassionate therapy, crisis support, and wellness
          workshops for everyone — because mental health is human.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition"
          >
            Get Support
          </Link>
        </div>
      </div>
    </section>
  );
}
