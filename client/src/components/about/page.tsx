// src/components/AboutSection.tsx
import Image from "next/image";
import { HeartHandshake, Users, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Compassion",
      desc: "Every story is heard with empathy.",
    },
    { icon: Users, title: "Community", desc: "Healing happens together." },
    { icon: Lightbulb, title: "Growth", desc: "We help you bloom." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900">
              About Wangui Nurtures
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded with love and empathy by{" "}
              <strong>Wangui Nancy Kairo</strong> a counselling psychologist,
              Wangui Nurtures is more than an organization ,it’s a movement to
              make mental health care{" "}
              <em>accessible, stigma-free, and deeply human</em>.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our licensed therapists, peer counselors, and wellness educators
              work together to create safe spaces where you can heal, grow, and
              thrive.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <v.icon className="h-7 w-7 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{v.title}</h3>
                    <p className="text-gray-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder  */}
          <div className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/download.png"
              alt="Wangui team"
              fill
              className="object-contain"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhPZwAJJAPr6QAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}
