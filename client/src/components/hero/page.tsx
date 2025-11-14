// src/components/Hero.tsx
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-200 via-white to-indigo-50 py-24 md:py-32 overflow-hidden">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[gold] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[black] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Leaf className="h-12 w-12 text-[gold] animate-pulse" />
        </div>

        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          <span className="text-[gold]">N</span>urturing Minds,{" "}
          <br className="hidden md:block" />
          <span className="text-[gold]">H</span>ealing Hearts
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Wangui Nurtures offers compassionate therapy, crisis support, and
          wellness workshops for everyone because mental health is human.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#f59e0b] text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[black] text-[black] font-semibold rounded-lg hover:bg-slate-50 transition"
          >
            Get Support
          </Link>
        </div>
      </div>
    </section>
  );
}
