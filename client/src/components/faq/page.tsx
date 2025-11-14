// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a referral to start therapy?",
    a: "No. You can book a session directly through our contact form or by calling us.",
  },
  {
    q: "Are sessions confidential?",
    a: "Absolutely. All conversations are private and protected under professional confidentiality standards.",
  },
  {
    q: "What if I need help outside office hours?",
    a: "We offer 24/7 crisis chat support. Reach out anytime via the “Get Support” button.",
  },
  {
    q: "Do you accept insurance?",
    a: "We are in-network with several providers. Contact us to verify your coverage.",
  },
  {
    q: "Can I join group sessions online?",
    a: "Yes! All group sessions are available both in-person and via secure video.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Got questions? We’ve got answers.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-emerald-600 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
