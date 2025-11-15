// src/components/Testimonials.tsx
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Client",
    text: "Wangui Nurtures  gave me a safe space to finally talk about my anxiety. I feel seen and understood for the first time.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Parent",
    text: "The group sessions helped my teenager open up. The facilitators are patient and truly caring.",
    rating: 5,
  },
  {
    name: "Amina R.",
    role: "Workshop Participant",
    text: "The mindfulness workshop changed how I handle stress. Simple tools, big impact.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900">
          What People Say
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from the hearts we’ve touched.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col"
            >
              <Quote className="h-8 w-8 text-[black] mb-4" />
              <p className="flex-1 text-purple-700 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
